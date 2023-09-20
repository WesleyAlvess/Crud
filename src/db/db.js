const mongoose = require('mongoose');
try {
    mongoose.connect('mongodb://127.0.0.1:27017/Crud');
    console.log("Conectado ao MongoDB");
} catch (error) {
    console.log("Nâo conectado ao MongoDB", error);
}

