const { Client } = require('pg'); 

const getGastos = async (req, res) => { 
    // Conexión a base de datos (ir cambiando cada día en railway)
    const client = new Client({
        user: "postgres", 
        host: "containers-us-west-141.railway.app", 
        database: "railway", 
        password: "Nqrh0KQvMXwaVM0XSqG9", 
        port: 7980,
    }); 

    client.connect(); 
    const response = await client.query('select * from gastos'); 
    client.end(); 
    res.status(200).json(response.rows);  
}

const setGastos = async (req, res) => { 
    const { desc, monto, fecha, tipo, frec } = req.body; 

    const client = new Client({
        user: "postgres", 
        host: "containers-us-west-141.railway.app", 
        database: "railway", 
        password: "Nqrh0KQvMXwaVM0XSqG9", 
        port: 7980,
    }); 

    const insert = "INSERT INTO gastos (gas_descripcion, gas_monto, gas_fecha, gas_tipo, gas_fecuencia) VALUES ($1, $2 ,$3, $4, $5)"

    client.connect();
    const response = await client.query(insert, [desc, monto, fecha, tipo, frec]); 
    console.log(response); 
    client.end(); 
    res.send('gasto insertado')
    
}

module.exports = { 
    getGastos, 
    setGastos
}