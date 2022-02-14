const express = require('express');
const app = express()
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//khoi dong methodOverrride
app.use(methodOverride('_method'))


//khoi dong body parse
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//khoi dong handlebars

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

const post = require('./routes/post')

//khoi dong midleware express

app.use(express.json());

//ket noi co so du lieu ket noi DB
connectDB()

app.use('/posts', post)


//ui handlebars
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req,res) => res.render('about'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server runing ${PORT}`))