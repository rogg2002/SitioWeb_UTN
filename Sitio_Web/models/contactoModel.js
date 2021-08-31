var pool = require('./bd');

async function insertContacto(obj) {
    try {                    // para manejar el error
        var query = "insert into contacto set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {       // da el error por consola
        console.log(error);
        throw error;
    }
}

module.exports = { insertContacto}