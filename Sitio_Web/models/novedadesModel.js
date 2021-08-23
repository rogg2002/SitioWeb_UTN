var pool = require('./bd');

// ----------Listar Novedades-----------
async function getNovedades() {
    var query ='select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

//-----------Eliminar Novedades-------------

async function deleteNovedadesById(id) {
    var query ='delete from novedades where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows;
}

//------------Agregar Novedad----------------
async function insertNovedad(obj) {
    try {                    // para manejar el error
        var query = "insert into novedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {       // da el error por consola
        console.log(error);
        throw error;
    }
}

//-----------Modificar Novedad----------------

//---llamo al campo que necesito mofificar---
async function getNovedadesById(id) { 
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//---modifico al campo que llamé-------------
async function modificarNovedadesById(obj, id) {
    try {
        var query = 'update novedades set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}




module.exports = { getNovedades, deleteNovedadesById, insertNovedad, getNovedadesById, modificarNovedadesById}