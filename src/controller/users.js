const UsersModel = require('../model/users')
const getAllUsers = async (req, res) => {
    try {
      const [data] = await UsersModel.getALlUsers()
        res.json({
            message: 'GET all users success',
            data: data
        })
    }catch (err){
       res.json({
           code: res.statusCode,
           err
       })
    }
}

const createUser = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'CREATE user success',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params

    res.json({
        message: 'DELETE user success',
        data: {
            id : idUser,
            name : "Naufal",
            email : "naufalmng@gmail.com",
            address : "Bogor",
        }
    })

}
const updateUser = (req, res) => {
    console.log(`idUser: ${req.params}`)
    res.json({
        message: 'UPDATE user success',
        data: req.body
    })
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}