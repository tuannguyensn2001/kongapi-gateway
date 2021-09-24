const express = require('express');

const app = express();

app.get('/api/v1/',(req,res) => {
    return res.status(200).json({
        name: 'Tuan'
    })
});


app.get('/api/v1/hello',(req,res) => {
    return res.status(200).json({
        name: 'Hello'
    })
});

app.post('/api/v1/request',(req,res) => {
    return res.status(200).json({
        name: 'Post'
    })
})


app.listen(3000);