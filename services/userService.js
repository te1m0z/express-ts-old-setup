const { db } = require('../database.js');
const bcrypt = require('bcrypt');

const tryLogin = async (request) => {

    const login    = request.body.login;
    const password = request.body.password;

    if (!login || !password) {
        return Promise.reject({
            status: false,
            error: {
                text: 'Логин и пароль должны быть заполнены'
            }
        });
    }

    try {

        const stmt = db.prepare('SELECT * FROM users WHERE login = ? LIMIT 1');
        const result = stmt.get(login);

        if (result) {

            const compared = await bcrypt.compare(password, result.password);

            if (compared) {
                return Promise.resolve({
                    status: true,
                    success: {
                        user: result,
                        text: 'типо успешно'
                    }
                });   
            }
        }

        return Promise.resolve({
            status: false,
            error: {
                text: 'Неверный логин или пароль'
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
    tryLogin
}