const { db } = require('../database.js');
const { transliterate, slugify } = require('transliteration');


const getAll = async () => {

    try {

        const getAllPostsStmt = db.prepare('SELECT * FROM posts');
        const getAllPostsResult = getAllPostsStmt.all();

        if (getAllPostsResult.length) {
            return Promise.resolve({
                status: true,
                success: {
                    posts: getAllPostsResult,
                    text: 'Данные успешно получены'
                }
            });
        }

        return Promise.reject({
            status: false,
            error: {
                text: 'Нет ни одного поста'
            }
        });

    } catch (error) {

        return Promise.reject({
            status: false,
            error: {
                text: 'Ошибка при выполнении запроса'
            }
        });

    }
}

const tryCreate = async (request) => {

    const title   = request.body.title;
    const content = request.body.content;

    if (!title || !content) {
        return Promise.reject({
            status: false,
            error: {
                text: 'Название и содержимое должны быть заполнены'
            }
        });
    }

    const slug = slugify(transliterate(title));

    try {

        const getAllPostsSlugStmt = await db.prepare('SELECT * FROM posts WHERE slug = ? LIMIT 1');
        const getAllPostsSlugsResult = await getAllPostsSlugStmt.get(slug);

        if (getAllPostsSlugsResult) {
            return Promise.reject({
                status: false,
                error: {
                    text: 'Такой пост уже есть'
                }
            });   
        }

        const tryCreatePostStmt = await db.prepare('INSERT INTO posts (title, content, slug) VALUES (?, ?, ?)');
        const tryCreatePostResult = await tryCreatePostStmt.run(title, content, slug);

        if (tryCreatePostResult.lastInsertRowid) {
            return Promise.resolve({
                status: true,
                success: {
                    text: 'Успешно создано'
                }
            });
        }

    } catch (error) {
        return Promise.reject({
            status: false,
            error: {
                text: 'Ошибка при выполнении запроса'
            }
        });
    }
}

const getOne = async (request) => {

    const id = request.params.id;

    if (!id) {
        return Promise.reject({
            status: false,
            error: {
                text: 'Недостаточно данных'
            }
        });
    }

    try {

        const getOneCategoryStmt = await db.prepare('SELECT * FROM categories WHERE id = ? LIMIT 1');
        const getOneCategoryResult = await getOneCategoryStmt.get(id);

        if (!getOneCategoryResult) {
            return Promise.reject({
                status: false,
                error: {
                    text: 'Категория не найдена'
                }
            });
        } else {
            return Promise.resolve({
                status: true,
                success: {
                    data: getOneCategoryResult,
                    text: 'Успешно найдено'
                }
            });
        }

    } catch (error) {
        return Promise.reject({
            status: false,
            error: {
                text: 'Ошибка при выполнении запроса'
            }
        });
    }
}

module.exports = {
    getAll,
    getOne,
    tryCreate
}