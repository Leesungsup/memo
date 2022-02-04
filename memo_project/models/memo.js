var mongoose = require('mongoose')
const { Schema } = require('mongoose');
const memoSchema = new mongoose.Schema({
    title:{type:String},
    content:{type:String},
    author:{type:String}
},{
    timestamps:true,
    collection:'memos'
});
memoSchema.statics.findAll=function(){
    return this.find({});
};
memoSchema.statics.create=function(payload){
    try{
        const newMemo=new this(payload);
        return newMemom.save();
    }catch(err){
        return err;
    }
}
module.exports=mongoose.model('memo',memoSchema);