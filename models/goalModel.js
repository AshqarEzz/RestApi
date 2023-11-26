const mongoose = require ('mongoose')

const goalschema= mongose.schema({
text:{
    type: String,
    required: [true, 'please add a text value']
}


},{
    timestamps:true,
}
)
module.exports =mongose.model('Goal', goal)