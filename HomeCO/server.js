const fs = require('fs');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


const dbPath = path.join(__dirname, 'HomeCO.db');


const db = new sqlite3.Database(dbPath, (err) => {

    if (err) {
        console.error('Database connection error:', err.message);
    } 
    else {
        console.log('Connected to SQLite database.');
    }

});



app.use(express.json());


app.use(express.static(path.join(__dirname)));




app.get('/api/products', (req, res) => {

    db.all('SELECT * FROM Products', [], (err, rows) => {

        if (err) {

            console.error("DATABASE ERROR:", err.message);

            res.status(500).json({
                error: err.message
            });

            return;
        }

        res.json(rows);

    });

});




app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});