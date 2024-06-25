const userService = require('../services/userServices');

exports.listUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};

exports.getUser = async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    res.json(user);
};

exports.createUser = async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    res.json(user);
};

exports.partialUpdateUser = async (req, res) => {
    const user = await userService.partialUpdateUser(req.params.userId, req.body);
    res.json(user);
};

exports.deleteUser = async (req, res) => {
    await userService.deleteUser(req.params.userId);
    res.status(204).send();
};