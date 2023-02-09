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
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.naver.com%2FPostView.naver%3FblogId%3Dgambasg%26logNo%3D222132751279%26categoryNo%3D128%26parentCategoryNo%3D0&psig=AOvVaw2o3QZwmFEP8f6PDGENS-m0&ust=1676012538291000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIiws7Hvh_0CFQAAAAAdAAAAABAQ"
    },

    address: {
        type: String,
        default:"00시 00구 00동"
    },
    address2:{
        type: String,
        default:"000동 000호" 
    },

})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)
module.exports = { UserInfo }