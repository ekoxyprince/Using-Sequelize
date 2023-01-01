const Sequelize = require("sequelize")

const sequelize = new Sequelize(
'sequelize',
'root',
'Ekoxyboss',
{dialect:'mysql',
host:'localhost'})
async function testConnection (){
    try {
        await sequelize.authenticate()
        console.log('connection has been establised')
    } catch (error) {
        console.error('unable to connect to database')
    }
}
testConnection()

module.exports = sequelize


