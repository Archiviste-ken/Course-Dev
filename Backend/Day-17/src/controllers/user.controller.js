const followModel = require("../model/follow.model")


async function followUserContoller(req,res){


    const followerUsername = req.user.username
    console.log(req.user);
    const followeeUsername = req.params.username
    
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