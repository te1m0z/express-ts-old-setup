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

    const title       = request.body.title;
    const content     = request.body.content;
    const category_id = request.body.category_id;

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

        const getCategoryIDStmt = await db.prepare('SELECT * FROM categories WHERE id = ? LIMIT 1');
        const getCategoryIDResult = await getCategoryIDStmt.get(category_id);

        if (!getCategoryIDResult) {
            return Promise.reject({
                status: false,
                error: {
                    text: 'Такой категории нет'
                }
            });   
        }

        const tryCreatePostStmt = await db.prepare('INSERT INTO posts (title, content, slug, category_id) VALUES (?, ?, ?, ?)');
        const tryCreatePostResult = await tryCreatePostStmt.run(title, content, slug, category_id);

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

        const getOnePostStmt = await db.prepare('SELECT * FROM posts WHERE id = ? LIMIT 1');
        const getOnePostResult = await getOnePostStmt.get(id);

        if (!getOnePostResult) {
            return Promise.reject({
                status: false,
                error: {
                    text: 'Пост не найден'
                }
            });
        } else {
            return Promise.resolve({
                status: true,
                success: {
                    data: getOnePostResult,
                    text: 'Успешно найден'
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


const deleteOne = async (request) => {

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

        const deleteOnePostStmt = await db.prepare('DELETE FROM posts WHERE id = ?');
        const deleteOnePostResult = await deleteOnePostStmt.run(id);

        if (!deleteOnePostResult.changes) {
            return Promise.reject({
                status: false,
                error: {
                    text: 'Пост не найден'
                }
            });
        } else {
            return Promise.resolve({
                status: true,
                success: {
                    text: 'Пост успешно удалён'
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


const patchOne = async (request) => {

    const id = request.params.id;
    const title = request.body.title;
    const content = request.body.content;
    const category_id = request.body.category_id || null;

    if (!id || !title || !content) {
        return Promise.reject({
            status: false,
            error: {
                text: 'Недостаточно данных'
            }
        });
    }

    const slug = slugify(transliterate(title));

    try {

        const patchOnePostStmt = await db.prepare(`
            UPDATE posts
            SET title = ?,
                content = ?,
                category_id = ?,
                slug = ?
            WHERE id = ?
        `);

        const patchOnePostResult = await patchOnePostStmt.run(title, content, category_id, slug, id);

        if (!patchOnePostResult.changes) {
            return Promise.reject({
                status: false,
                error: {
                    text: 'Пост не найден'
                }
            });
        } else {
            return Promise.resolve({
                status: true,
                success: {
                    text: 'Пост успешно обновлён'
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
    tryCreate,
    deleteOne,
    patchOne
}