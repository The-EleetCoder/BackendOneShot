import express from 'express';

const app = express();

// setting up view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {name: 'Jai'})
})

app.listen(5000,()=>{
    console.log("Server is running");
})