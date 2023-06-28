const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const fileupload = require('express-fileupload')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
dotenv.config()
app.use(fileupload())
//mongoose model
let validateEmail = function(email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
// const Userss = new mongoose.model('Userss',new mongoose.Schema({
//   username: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 5,
//       unique: true
//   },
//   email: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//       validate: [validateEmail, 'Please fill a valid email address'],
//       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//   },
//   password: {
//       type: String,
//       minlength: 5,
//       required: true,
//   },
//   isAdmin: {
//       type: Boolean
//   }
// }))

const userssSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [
        {
          validator: function (value) {
            // Email validasiyasını burada əlavə edin
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
          },
          message: 'Please fill a valid email address'
        }
      ]
    },
    password: {
      type: String,
      minlength: 5,
      required: true
    },
    isAdmin: {
      type: Boolean
    }
  });
  
  const Userss = mongoose.model('Userss', userssSchema);
  
  module.exports = Userss;
const media_router = require("./routes/media.routes")
const infohotel_router = require("./routes/infohotel.routes")
const about_router = require("./routes/about.routes")
const spaimages_router = require("./routes/spaimages.routes")
const spainfo1_router = require("./routes/spainfo1.routes")
const parties_router = require("./routes/parties.routes")
const partieimg_router = require("./routes/partieimg.routes")
const tour_router = require("./routes/tour.routes")
const tourimg_router = require("./routes/tourimg.routes")
const entment_router = require("./routes/entment.routes")
const entmentimg_router = require("./routes/entmentimg.routes")
const res_router = require("./routes/res.routes")
const roominfo_router = require("./routes/roominfo.routes")
const room_router = require("./routes/rooms.routes")
const home_router = require("./routes/home.routes")
const form_router = require("./routes/form.routes")
const sendemail_router = require("./routes/sendemail.routes")
// const authRoute = require("./routes/auth.routes")
// const usersRoute = require("./routes/user.routes")
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(`/api/media`, media_router)
app.use(`/api/infomarxal`, infohotel_router)
app.use(`/api/about`, about_router)
app.use(`/api/spaimages`, spaimages_router)
app.use(`/api/spainfo1`, spainfo1_router)
app.use(`/api/parties`, parties_router)
app.use(`/api/partieimg`, partieimg_router)
app.use(`/api/tour`, tour_router)
app.use(`/api/tourimg`, tourimg_router)
app.use(`/api/entment`, entment_router)
app.use(`/api/entmentimg`, entmentimg_router)
app.use(`/api/res`, res_router)
app.use(`/api/roominfo`, roominfo_router)
app.use(`/api/rooms`, room_router)
app.use(`/api/home`, home_router)
app.use(`/api/contactus`, form_router)
app.use(`/api/sendemail`, sendemail_router)
//---------------------------------------------------------codes

//VERIFY JWT token
const verifyJWT = async(req,res,next)=>{
  const token = req.headers['x-access-token'];
  if (!token) {
      res.send({message: 'you may need token to get here!'});
  }
  else{
     jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
          if (err) {
              res.send({auth:false,message: 'authentication failed!'})
          }
          else{
              req.userId = decoded.id;
              next();
          }
     })
  }
}
//register - sign up
app.post('/api/registerr',async(req,res)=>{
  const{username,password,email} = req.body;
  const existedUsername = await Userss.findOne({username: username});
  const existedEmail = await Userss.findOne({email: email});
  if (existedUsername) {
      res.send({
          auth: false,
          message: 'username already exists!'
      })
      return;
  }
  if (existedEmail) {
      res.send({
          auth: false,
          message: 'email already used!'
      })
      return;
  }
  const salt = await bcrypt.genSalt(10); //500ms
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await Userss({
      username: username,
      email: email,
      password: hashedPassword,
      isAdmin: false
  })
  await newUser.save();
  res.send({
      auth: true,
      data: newUser,
      message: 'user signed up successfully!',
  })
  
});

//login - sign in

app.get("/api/loginn",async(req,res)=>{
  try{
    const logins = await Userss.find();
    res.status(200).json(logins);
  }catch(error){
    res.status(500).json(error)
  }
})

app.post('/api/loginn',async(req,res)=>{
  const{username,password} = req.body;
  const existedUsername = await Userss.findOne({username: username});
  if (!existedUsername) {
      res.send({auth:false,message:'username not found!'})
  }
  else{
      const isValid = await bcrypt.compare(password,existedUsername.password);
      if (!isValid) {
          res.send({auth:false, message: 'password is incorrect!'});
      }
      else{
          //username, password +
          const id =  existedUsername._id;
          const token =  jwt.sign({id}, process.env.SECRET_KEY,{
              expiresIn: '1d'
          })
          res.send({
              auth:true,
              user: {
                  id: existedUsername._id,
                  username: existedUsername.username,
                  email: existedUsername.email,
                  isAdmin: existedUsername.isAdmin
              },
              token: token,
              message: 'user logged in successfully!'
          })
      }
  }
})


app.delete("/api/login/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await Userss.findByIdAndDelete(userId);
    
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.delete(`/api/loginn`,async(req,res)=>{
//   const id=req.params.id
//   const deletesign = await Userss.findByIdAndDelete(id)
//   res.status(202).send(deletesign)
// })


//------------------------------------------------------------------------------------------
// app.use(`/api/auth`, authRoute)
// app.use(`/api/user`, usersRoute)
// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500
//   const errorMessage = err.message || "Something went wrong!"
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

//------------------------------------------------------------------------------------------
//get users

// app.get('/api/userss',verifyJWT,async(req,res)=>{
//   const users = await Userss.find()

//   res.json({
//       data: users,
//       message: 'data get successfully!'
//   })
// })


app.get("/api/userss",async(req,res)=>{
  try{
    const users = await Userss.find();
    res.status(200).json(users);
  }catch(error){
    res.status(500).json(error)
  }
})


//logut
app.post('/api/logout',(req,res)=>{
    const{token} = req.headers['x-access-token'];
    jwt.destroy(token);
})

PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION.replace('<password>', DB_PASSWORD)).then(() => {
  console.log("MongoDB Connected!!!")
});
