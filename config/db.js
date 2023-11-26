const { error } = require('console')
const mongose = require ('mongoose')

const connectDB = async () => {
try{
const conn = await mongose.connect(process.env.MONGO_URI)

console.log(`MONGODB Connected: ${conn.connection.host}`)

}
catch(error){
console.log(error)
process.exit(1)
}


}