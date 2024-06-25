const userDao = require('../dao/userDao');

exports.getAllUsers = () => userDao.findAllUsers();
exports.getUserById = (id) => userDao.findUserById(id);
exports.createUser = (userData) => userDao.createUser(userData);
exports.updateUser = (id, userData) => userDao.updateUser(id, userData);
exports.partialUpdateUser = (id, userData) => userDao.partialUpdateUser(id, userData);
exports.deleteUser = (id) => userDao.deleteUser(id);
