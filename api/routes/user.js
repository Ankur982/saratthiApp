const router = require("express").Router();
const User = require("../model/User")





router.post("/add-user", async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phoneno: req.body.phoneno,
            dob: req.body.dob,
            profileImg: req.body.profileImg,
            isActive: req.body.isActive
        });
        await newUser.save();
        res.status(200).send(newUser);
    } catch (err) {
        res.status(500).json('Server Error....!');
    }
});




router.get("/list-user", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(404).send(err);
    }
});







module.exports = router;