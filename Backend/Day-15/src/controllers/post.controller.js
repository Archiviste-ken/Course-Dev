const postModel = require("../model/post.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

console.log("ENV:", process.env.IMAGEKIT_PRIVATE_KEY);

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


async function createPostController(req, res) {
    console.log(req.body, req.file)
 console.log("cookies:", req.cookies);
    const token = req.cookies.token
    
    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    let decoded = null;
    try{ decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
   
    console.log("decoded:", decoded);


   const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
       fileName: "Test",
         folder: "cohort-2-insta-clone"
   })


    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })
    

    res.status(201).json({
        message: "Post created successfully",
        post
    })

}

async function getPostController(req, res) {

    let decoded = null;

    const token = req.cookies.token
    try{ decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    const userId = decoded.id
    // console.log(decoded);
    // console.log(userId);

    const posts = await postModel.find({
        user: userId
    })
    
    res.status(200).json({
        message: "Here are the posts for the user",
        posts
    })
}

async function getPostDetailsController(req, res) {
    const token = req.cookies.token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(404).json({
            message: "Unauthorized"
        })
    }
}



module.exports = {
    createPostController,
    getPostController
}  