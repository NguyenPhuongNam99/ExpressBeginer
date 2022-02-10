const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
           useNewUrlParser: true, 
            useUnifiedTopology: true 
        } )
        console.log('da ket noi co so du lieu')
    } catch (error) {
        console.log(error);
        process.exit(1)        
    }
}

module.exports = connectDB;