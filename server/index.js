const express = require("express")
var bodyParser = require('body-parser');
const app = new express()
// app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sanjay0001:122333abbccc@cluster0.s8nvo.mongodb.net/bookmanager');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const contactSchema = new mongoose.Schema({
    name: String,
    mobileNumber : String
  });
  const Contact = mongoose.model('Contact', contactSchema);

  app.post("/addContact",async (req,res)=>{
    const name=req.body.Name;
    const number=req.body.mobileNumber;
    console.log(name,number)
    const q_result=await Contact.findOne({ mobileNumber: number })
    console.log(q_result)
      if (!q_result) {
        console.log(`User with mobile number ${number} not found.`);
        const newContact = new Contact({ name: name,mobileNumber:number});
        newContact.save()
        res.send({status:"not present"})
      } else {
        console.log(`User with mobile number ${number} found: ${name}`);
        res.send({status:"present"})
      }
    });
  
  app.post("/delete",async (req,res)=>{
    const number=req.body.mobileNumber
    console.log(number)
    const q_result = await Contact.deleteOne({mobileNumber:number})
    console.log(q_result)
    res.send({status:"done"})
  })

  app.get("/showContacts",async (req,res)=>{
    const q_result = await Contact.find()
    console.log(q_result)
    let repo=[]
    q_result.forEach(element => {
      repo.push({name:element.name,mobileNumber:element.mobileNumber})
    });
    console.log(repo)
    res.send(repo)
  })

  

  app.get("/",(req,res)=>{
    console.log("Hello")
    const name="Rakesh"
    console.log(name)
    const u = new User({ name: name });
    u.save()
    res.send(u.name)

  })
  app.get("/users",async (req,res)=>{
    const users = await User.find({name:'Sanjay'});
    res.send(users)
    console.log(users)
  })

}








app.listen(5555)