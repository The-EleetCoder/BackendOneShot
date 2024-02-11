import express from 'express';
import path from 'path'; // to get the path from scratch

const app = express();

// using middleware
// to link the static files ( the public folder )
app.use(express.static(path.join(path.resolve(), "public"))); 
app.use(express.urlencoded({extended: true}));

// setting up view engine
app.set('view engine', 'ejs');

const users = [];

app.get('/', (req, res) => {
    res.render('index', {name: 'Jai'})
})

app.post('/contact', (req, res) => {
    users.push({username: req.body.name, email: req.body.email, password: req.body.password})
    res.render('success');
})

app.get('/users', (req, res) => {
    res.json({
        users
    })
})

app.listen(5000,()=>{
    console.log("Server is running");
})