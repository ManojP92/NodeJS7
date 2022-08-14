const mongoose= require('mongoose');
const productSchema = new mongoose.Schema({
    //populate,lookup, aggregation
    id : {
        type: String
  },
    name :{
        type :String,
        required : true
    },
    isAvailable : Boolean,
    tags : [String]
})

const Product = mongoose.model('Product', productSchema);
module.exports= Product;