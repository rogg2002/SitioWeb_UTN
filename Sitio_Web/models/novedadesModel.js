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

module.exports = { getNovedades, deleteNovedadesById}