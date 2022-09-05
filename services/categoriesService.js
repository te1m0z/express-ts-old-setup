const { db } = require('../src.js');
const { transliterate, slugify } = require('transliteration');


const getAll = async () => {

    try {

        const stmt = db.prepare('SELECT * FROM categories');
        const result = stmt.all();

        if (result.length) {
            return Promise.resolve({
                status: true,
                success: {
                    categories: result,
                    text: 'Данные успешно получены'
                }
            });
        }

        return Promise.reject({
            status: false,
            error: {
                text: 'Нет ни одной категории'
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

    const name = request.body.name;

    if (!name) {
        return Promise.reject({
            status: false,
            error: {
                text: 'Название должно быть заполнено'
            }
        });
    }

    const slug = slugify(transliterate(name));

    try {

        const getAllCategoriesSlugsStmt = await db.prepare('SELECT * FROM categories WHERE slug = ? LIMIT 1');
        const getAllCategoriesSlugsResult = await getAllCategoriesSlugsStmt.get(slug);

        if (getAllCategoriesSlugsResult) {
            return Promise.reject({
                status: false,
                error: {
                    text: 'Такая категория уже есть.'
                }
            });   
        }

        const tryCreateCategoryStmt = await db.prepare('INSERT INTO categories (name, slug) VALUES (?, ?)');
        const tryCreateCategoryResult = await tryCreateCategoryStmt.run(name, slug);

        if (tryCreateCategoryResult.lastInsertRowid) {
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