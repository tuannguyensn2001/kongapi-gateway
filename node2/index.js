const express = require('express');

const app = express();

app.get('/api/v1/test',(req,res) => {
    return res.status(200).json({
        name: 'Test1'
    })
});


app.get('/api/v1/other',(req,res) => {
    return res.status(200).json({
        name: 'Other'
    })
});

console.log(app._router.stack);
app.listen(5000);