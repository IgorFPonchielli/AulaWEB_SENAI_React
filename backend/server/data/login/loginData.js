const database = require('../../database/database');

exports.authUser = function (user) {
    return database.query('select "Nome" from "Usuario" where "Email" = $1 AND "Senha" = $2', [user.Email, user.Senha])
}