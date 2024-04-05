const User = require('../../models/user')

async function index(req, res) {
    try {
        const profile = await User.findOne({ _id: req.user._id }).select('picture bio');
        res.json(profile);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const updatedProfie = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedProfie)

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}

module.exports = {
    index,
    update
}