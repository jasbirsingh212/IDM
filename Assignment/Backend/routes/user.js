const router = require('express').Router();
let User= require('../model/user');

router.route('/').get((req,res) => {

    const email = req.body.userEmail;
    User.find()
    .then((users) =>{
         res.json(users)
        })
    .catch(err => res.status(400).json('Error:' + err));
});


router.route('/add').post((req,res) =>{
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    const newUser = new User({
        userEmail,
        userPassword,
        userName
    })

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error:'+err));
});

module.exports = router;