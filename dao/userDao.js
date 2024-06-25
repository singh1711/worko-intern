const User = require('../models/userModels');

exports.findAllUsers = () => User.find();
exports.findUserById = (id) => User.findById(id);
exports.createUser = (userData) => new User(userData).save();
exports.updateUser = (id, userData) => User.findByIdAndUpdate(id, userData, { new: true });
exports.partialUpdateUser = (id, userData) => User.findByIdAndUpdate(id, { $set: userData }, { new: true });
exports.deleteUser = (id) => User.findByIdAndUpdate(id, { deleted: true }, { new: true });
