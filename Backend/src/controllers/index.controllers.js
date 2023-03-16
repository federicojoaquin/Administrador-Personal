const { Client } = require('pg'); 

const getGastos = async (req, res) => { 
    // Conexión a base de datos (ir cambiando cada día en railway)
    const offset = req.query.change 
    console.log(offset); 
    const client = new Client({
        user: "postgres", 
        host: "containers-us-west-177.railway.app", 
        database: "railway", 
        password: "UjYbysNPXPAD7M5CV8VP", 
        port: 6905,
    }); 
    
    client.connect(); 
    const response = await client.query(`select * from gastos order by gas_fecinsercion desc limit 4 offset ${offset}`); 
    client.end(); 
    res.status(200).json(response.rows);  
}

const setGastos = async (req, res) => { 
    const { desc, monto, fecha, tipo, frec } = req.body; 

    const client = new Client({
        user: "postgres", 
        host: "containers-us-west-177.railway.app", 
        database: "railway", 
        password: "UjYbysNPXPAD7M5CV8VP", 
        port: 6905,
    }); 

    const insert = "INSERT INTO gastos (gas_descripcion, gas_monto, gas_fecha, gas_tipo, gas_fecuencia, gas_fecinsercion) VALUES ($1, $2 ,$3, $4, $5, current_timestamp)"

    client.connect();
    const response = await client.query(insert, [desc, monto, fecha, tipo, frec]); 
    console.log(response); 
    client.end(); 
    res.send('gasto insertado')
    
}

// const getNextOrPrev = async (req, res) => { 

//     let change = req.param.change;

//     const client = new Client({
//         user: "postgres", 
//         host: "containers-us-west-137.railway.app", 
//         database: "railway", 
//         password: "T5GtOFuhWiHYkcTVZqJX", 
//         port: 7108,
//     }); 

//     client.connect(); 
//     const response = await client.query(`select * from gastos order by gas_fecinsercion desc limit 4 offset ${change}`); 
//     client.end(); 
//     res.status(200).json(response.rows);  
// }

module.exports = { 
    getGastos, 
    setGastos,  
}