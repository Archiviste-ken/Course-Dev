const followModel = require("../model/follow.model")
const userModel = require("../model/user.model")


async function followUserContoller(req,res){


    const followerUsername = req.user.username
    console.log(req.user);
    const followeeUsername = req.params.username
    
    if(followerUsername === followeeUsername){
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }
    const isFolloweeExists = await userModel.findOne({ username: followeeUsername })
    
    if(!isFolloweeExists){
        return res.status(404).json({
            message: "The user you are trying to follow does not exist"
        })
    }
    
    const isAlreadyFollowing = await followModel.findOne({
        followee : followeeUsername,
        follower: followerUsername
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message: "You are already following this user",
            follow: isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })
    res.status(201).json({
        message: `You are now following ${followeeUsername}`,
        data: followRecord
    })
}
    module.exports = {
    followUserContoller
}