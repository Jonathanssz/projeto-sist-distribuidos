var mysql = require('mysql');
var fs = require('fs');

class HandleDBMS_MySQL {
    constructor(host = null, database = null, user = null, password = null) {
        var session_file = JSON.parse(fs.readFileSync('./config/server/env.json'));

        if (session_file) {
            this._host = (typeof host !== 'string' || host == null) ? session_file.host : host;
            this._database = (typeof database !== 'string' || database == null) ? session_file.database : database;
            this._user = (typeof user !== 'string' || user == null) ? session_file.user : user;
            this._password = (typeof password !== 'string' || password == null) ? session_file.password : password;
        } else {
            console.log('Parâmetros incorretos para a classe: \`%s\`', this.construtor.name);
        }
    }

    connect() {
        this.connection = mysql.createConnection({
            host: this._host,
            database: this._database,
            user: this._user,
            password: this._password
        });
    }
}

var teste = new HandleDBMS_MySQL();
teste.connect();
