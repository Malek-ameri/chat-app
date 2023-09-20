const { asyncHandler } = require('../utils/asyncHandler');
const User = require('../model/user.model');


const getAllUser = asyncHandler(async (req,res, next) => {

  const users = await User.find({ _id: { $ne: req.userId } });

  res.status(200).json({status:"success",data:users})
})


module.exports = {
  getAllUser
}