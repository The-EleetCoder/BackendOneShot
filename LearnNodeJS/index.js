import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
        success: true,
        package: []
    })
})

app.listen(5000,()=>{
    console.log("Server is running");
})