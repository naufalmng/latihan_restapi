const dbPool = require('../config/db')
const getALlUsers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbPool.execute(SQLQuery)
}
module.exports = {
    getALlUsers
}