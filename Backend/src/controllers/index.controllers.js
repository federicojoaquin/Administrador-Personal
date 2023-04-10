const { Client } = require('pg'); 

const getGastos = async (req, res) => { 
    // Conexión a base de datos (ir cambiando cada día en railway)
    const offset = req.query.change 
    console.log(offset); 
    const client = new Client({
        user: "//PGUSER", 
        host: "//PGHOST", 
        database: "//DATABASE_URL", 
        password: "//PGPASSWORD", 
        port: "//PGPORT",
    });
    
    client.connect(); 
    const response = await client.query(`select * from gastos order by gas_fecinsercion desc limit 4 offset ${offset}`); 
    client.end(); 
    res.status(200).json(response.rows);  
}

const setGastos = async (req, res) => { 
    const { desc, monto, fecha, tipo, frec } = req.body; 

    const client = new Client({
        user: "//PGUSER", 
        host: "//PGHOST", 
        database: "//DATABASE_URL", 
        password: "//PGPASSWORD", 
        port: "//PGPORT",
    });

    const insert = "INSERT INTO gastos (gas_descripcion, gas_monto, gas_fecha, gas_tipo, gas_fecuencia, gas_fecinsercion) VALUES ($1, $2 ,$3, $4, $5, current_timestamp)"

    client.connect();
    const response = await client.query(insert, [desc, monto, fecha, tipo, frec]); 
    console.log(response); 
    client.end(); 
    res.send('gasto insertado')
    
}

module.exports = { 
    getGastos, 
    setGastos,  
}
