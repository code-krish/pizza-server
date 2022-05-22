const userModel = require('../model/userSchema');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken"); 

exports.createUser = async(req, res, next) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    const userData = new userModel({...req.body});
    try {
        let response = await userData.save();
        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

exports.createAdmin = async(req, res, next) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    req.body.isAdmin = true;
    const userData = new userModel({...req.body});
    try {
        let response = await userData.save();
        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

exports.getUser = async(req, res, next) => {
    try {
        const users = await userModel.find();
        res.send(users);
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

exports.updateUser = async(req, res, next) => {
    try {
        const user = await userModel.findOneAndUpdate({_id: req.params.id}, {...req.body}, {runValidators: true , new: true});
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

exports.deleteUser = async(req, res, next) => {
    try {
        const user = await userModel.findByIdAndRemove({_id: req.params.id});
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

exports.loginUser = async(req, res, next) => {
    try {
  
    let user = await userModel.findOne({email : req.body.email});
    
        if(user) {
       
          let compare = bcrypt.compareSync(req.body.password, user.password );
          
          if(compare) {
              
              let token = jwt.sign({name: user.email , id : user._id}, "thisisasecretkey")
              res.json({token})
          } else {
            res.status(500).json({message : "Credential not match"})
          }
        } else {
          res.status(401).json({message: "Credential not match"})
        }
      } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" });
      }
};



exports.loginAdmin = async(req, res, next) => {
    try {
  
    let user = await userModel.findOne({email : req.body.email});
    
        if(user) {
       
          let compare = bcrypt.compareSync(req.body.password, user.password );
          
          if(compare) {
              
              let token = jwt.sign({name: user.email , id : user._id}, "thisisasecretkey")
              res.json({token})
          } else {
            res.status(500).json({message : "Credential not match"})
          }
        } else {
          res.status(401).json({message: "Credential not match"})
        }
      } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" });
      }
};

