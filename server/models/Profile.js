const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
user: {
 type: mongoose.Schema.Type.ObjectId,
 ref: 'user'
 },
 
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
