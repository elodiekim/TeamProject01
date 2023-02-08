const mongoose = require('mongoose')

const userInfoSchema = mongoose.Schema({
   user_id: {
        type: String,
        required: true,
    },
    
    phoneNumber: {
        type: String,
        default:"000-0000-0000"
    },
    
    imageKey: {
        type: String,
        default: "profile_img"
    },

    address: {
        type: String,
        default:"00시 00구 00동"
    },
    address2:{
        type: String,
        default:"000동 000호" 
    }

})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)
module.exports = { UserInfo }