const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(cors());

app.use(bodyParser.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testproject',
    }
)

app.get('/', function (req, res) {
    const sql = 'SELECT * FROM items'
    db.query(sql, (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    })
})

app.post('/items_form', (req, res) => {
    const sql = 'INSERT INTO items (name, contact, item, description) VALUES (?)';
    const values = [
        req.body.name,
        req.body.contact,
        req.body.item,
        req.body.description
    ]

    db.query(sql, [values], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

app.put('/update_form/:id', (req, res) => {
    const sql = 'UPDATE items set name = ? contact = ? item = ? description = ? Where ID = ?';
    const values = [
        req.body.name,
        req.body.contact,
        req.body.item,
        req.body.description
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

app.delete('/items/:id', (req, res) => {
    const sql = 'DELETE FROM items Where ID = ?';
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

app.listen(8080, () => {
    console.log('Listening');
})