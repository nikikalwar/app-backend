
const mongoose=require('mongoose');

const userSchema = new mongoose.Schema(
    { 
    name:String,
    password:{type:String,required:true},
    email:{type:String,required:true}
    }
    );

    const userSignUpSchema = new mongoose.Schema(
      { 
      firstName:String,
      lastName:String,
      age:Number,
      phone:Number,  
      password:{type:String,required:false},
      email:{type:String,required:false}
      }
      );
  
    const Users = mongoose.model('Users', userSignUpSchema);
    main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://root:K4bHbxJBVdLdvug@cluster0.kvrazdn.mongodb.net/test-users');
   
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports=Users;