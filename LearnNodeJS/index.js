import express from 'express';
import path from 'path'; // to get the path from scratch

const app = express();

// to link the static files ( the public folder )
app.use(express.static(path.join(path.resolve(), "public"))); 

// setting up view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {name: 'Jai'})
})

app.listen(5000,()=>{
    console.log("Server is running");
})