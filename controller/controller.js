const User = require("../model/UserModel");
const { db } = require("../database/db");
const Post = require("../model/PostModel");
const mongoose = require("mongoose");

const registerUser = async (req, res) => {
  const data = new User(req.body);
  data.save((error, saveData) => {
    if (error) {
      console.log(error);
    } else {
      // return res.json({
      //   register: true,
      //   result: saveData,
      // });
      return res.send(saveData)
    }
  });
};

const savePost = async (req, res) => {
  const data = new Post(req.body);
  data.save((error, saveData) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saveData)
    }
  });
};

const getPosts = async (req,res)=>{
  Post.find((error, data)=>{
    if(error){
      res.status(404).send('Error');
    }else{
      res.send(data)
    }
  }).sort({createdAt:"desc"})
}
const checkSingleUser = async(req,res)=>{
  const id = req.params.id;
  console.log(id)
  User.findById({_id:id},(error,data)=>{
    if(error){
      res.status(404).send('Error');
    }else{
      res.send(data)
    }
  })
}
module.exports = {
  registerUser,
  savePost,
  getPosts,
  checkSingleUser
};
