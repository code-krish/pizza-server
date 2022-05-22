const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({

    name : {type: String , require},
    varients : {type : Array},
    prices : [{
        small : {type : Number},
        medium : {type : Number},
        large : {type : Number}
    }] ,
    category : {type: String , require},
    image : {type: String , require},
    description : {type: String , require}

} )

const Product = mongoose.model('Pizzas' , pizzaSchema)

module.exports = Product;


