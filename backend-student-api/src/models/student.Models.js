const mongoose = require("mongoose");
const {Schema} = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    },

    class: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true, 
    }
   
   
});

studentSchema.virtual('id').get(function(){
    return this._id.toHexString()
})

studentSchema.set('toJSON',{
    virtuals:true
})


module.exports = mongoose.model("student", studentSchema)