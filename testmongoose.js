const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema = {
    name: String,
    age:Number,
    health:String
  };
  const mydata = mongoose.model('cats',schema);
  mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})
  // const Cat = mongoose.model('Cat',schema);
  // const kitty = new Cat({name:'Zidian'});
  // kitty.save().then(() =>console.log('meow'));
  // const kitty1 = new Cat({name:"Zhang1",age:1,health:"good"})
  // kitty1.save().then(()=>console.log("new schema writed"))