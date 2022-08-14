const mongoose= require('mongoose');
const categorySchema = new mongoose.Schema({
    id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
  },
    type :{
        type :String,
        required : true,
         uppercase : true
    }
})

const Category = mongoose.model('Catagory', categorySchema);
module.exports= Category;