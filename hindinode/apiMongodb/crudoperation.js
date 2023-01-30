const mongoose=  require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/mongodb').then(() => console.log("database connected"));
//  mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/mongodb");
    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number,
        category:String,
        brand:String

    });
const saveInDB = async ()=>{
    const ProductsModel=mongoose.model('tests',ProductSchema);
    let data = new ProductsModel({name:"iphone 13",price:1200,category:"mobile",brand:"apple"});
    let result= await data.save();
    console.log(result)
}
const updateInDB = async ()=>{
    const ProductsModel=mongoose.model('tests',ProductSchema);
    let data = await ProductsModel.updateOne(
        {        name:"iphone 13"},
        {
            $set:{name:"iphone 13 pro"}
        })
        console.log(data);

}
const deleteInDB =async() =>{
    const ProductsModel=mongoose.model('tests',ProductSchema);
    let data = await ProductsModel.deleteOne({name:'iphone 13 pro max'});
    console.log(data);

}
const findIndDB =async() =>{
    const ProductsModel=mongoose.model('tests',ProductSchema);
    let data = await ProductsModel.find();
    console.log(data);

}
findIndDB()