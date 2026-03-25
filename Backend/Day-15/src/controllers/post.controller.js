const postModel = require("../model/post.model")
const imageKit = require("@imagekit/nodejs")



const imagekit = ImageKit({
    privatekey: process.env.IMAGEKIT_PRIVATEKEY
})



async function creatPostController(req,res){

    console.log(req.body, req.file)
    
}



module.exports = {
    creatPostController
}