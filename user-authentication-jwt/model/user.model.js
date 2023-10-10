const mongoose = require("mongoose");
const { userSchema } = require("./user.schema");
const {UserRoles} = require("../lib/roles")

const User = mongoose.model("User", userSchema);

async function createUser(userData) {
    return await User.create(userData);
}

async function authenticateUser(username, password) {
    const user = await User.findOne({ username });

    if (!user) {
        return null;
    }

    const isPasswordValid = await user.authenticate(password);

    if (!isPasswordValid) {
        return null;
    }

    return user;
}

async function findAllUsers() {
    return await User.find({});
}

//---------------------------------------------------Working with a single user

async function findSingleUser(id) {
    const user = await User.findById(id)
    if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
    }

    return user
}


async function updateUser(id, data, req) {
    const user = await User.findById(id)
    if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
    }

    if (req.user.role !== UserRoles.ADMIN) {
        const error = new Error("User not authorized")
        error.statusCode = 403
        throw error
    }

    return await User.findOneAndUpdate({ _id: id }, data, { new: true })
}

async function deleteUser(id, req) {
    const user = await User.findById(id)
    if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
    } 

    if (req.user.role !== UserRoles.ADMIN) {
        const error = new Error("User not authorized")
        error.statusCode = 403
        throw error
    }

    await User.findByIdAndDelete( { _id: id } )  
}



module.exports = {
    User,
    createUser,
    authenticateUser,
    findAllUsers,
    findSingleUser,
    updateUser,
    deleteUser,
};