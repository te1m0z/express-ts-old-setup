const { db } = require('../database.js');


const getAll = async () => {

    try {

        const stmt = db.prepare('SELECT * FROM categories');
        const result = stmt.all();

        if (result.length) {
            return Promise.resolve({
                status: true,
                success: {
                    user: result,
                    text: 'типо успешно'
                }
            });
        }

        return Promise.resolve({
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

module.exports = {
    getAll
}