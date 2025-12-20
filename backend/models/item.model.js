import mongoose, { Mongoose } from "mongoose";


const itemSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true, "Item name is required"],
        minLength : 10,
        maxLength : 200,
        trim : true
    },
    description : {
        type : String,
        required : [true, "Watch Description is required"],
        minLength : 20,
        trim : true
    },
    stock : {
        type : Number,
        default : 0,
        min : 0
    },
    rate : {
        type : Number,
        min : 1,
        max: 5,
        default : 3
    },
    category : {
        type : String,
        enum : ["Men", "Women", "Unisex"],
        required : [true, "Category is required"]
    },
    type : {
        type : String,
        enum : ["Analog", "Digital", "Smartwatch", "Sport"],
        required : [true, "Type is required"]
    },
    images: [
        {
            type : String
        }
    ],
    price : {
        type : Number,
        default : 0,
        min : 0
    },
    
    recommendationScore : {
        type : Number,
        default : 0,
        min : 0,
        
    },

    keyWords : {
        type : [String],
        default : [],
        lowercase : true
    }

   
}, {timestamps: true});

const Item = mongoose.model('Item', itemSchema);

export default Item;