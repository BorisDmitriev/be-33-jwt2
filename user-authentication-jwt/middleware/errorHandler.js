// async function userNotFound(Model, id){
//     const user = await Model.findById(id)
//     if (!user) {
//         const error = new Error("User not found")
//         error.statusCode = 404
//         throw error
//     }
//     return user
// }

// module.exports = { userNotFound }