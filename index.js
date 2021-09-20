const { Pool, Client } = require('pg')

/********************
****CONFIGURACION**** 
*********************/
const pool = new Pool({
  user: 'buencom',
  host: '10.2.0.88',
  database: 'buencom',
  password: 'medellin1*',
  port: 9999,
})

/****************************
****FUNCIONES - CONSULTAS****
****************************/

//Get books
const getBooks = async () => {
    try {
       await pool.query('SELECT * FROM books;', (err, res) => {
            console.log(err, res.rows)
            pool.end()
          })
    } catch (error) {
        console.log(error)
    }
}


//getBooks();


//INSERTAR LIBRO
const insertBooks = async () => {
    try {
       const text = 'INSERT INTO books(id, section, title, author) VALUES ($1,$2,$3,$4);';
       const values = [8, 8, 'negocio del siglo 21', 'Jamasaky'];

       await pool.query(text, values, (err, res) => {
            console.log(err, res)
            pool.end()
          })
    } catch (error) {
        console.log(error)
    }
}

insertBooks();

