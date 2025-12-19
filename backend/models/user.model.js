import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "name is required"],
        trim : true,
        minLength : 5,
        maxLength : 100
    },
    email : {
        type : String,
        required : [true, "email is required"],
        unique : true,
        match : [/\S+@\S+\.\S+/, 'Please fill a valid mail address'],
        lowercase : true,
        minLength : 5,
        maxLength : 255
    },
    role : {

        type : String,
        required : [true, "role is required"],
        default : 'user',
        enum  : ['user', 'admin']
    },
    password : {
        type : String,
        minLength : 6,
        required : [true, "password is required"],
    },
    cart : {
        items : [{
        itemId : {type : mongoose.Schema.Types.ObjectId, ref : "Item", required : true},
        quantity : {type : Number, default : 1}
    }],
      deliveryOption : {
        id : {
            type : String,
            default : "Standard"
        },
        name : {
            type : String,
            default : "Free Shipping"
        },
        delayDays : {
            type : Number,
            default : 5,
            enum : [5,2,1]
        },
        price : {
            type : Number,
            default : 0
        }
      }
    }
}, {timestamps : true});


const User = mongoose.model('user', userSchema);


export default User;
