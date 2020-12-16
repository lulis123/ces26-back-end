const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoosePatchUpdate = require('mongoose-patch-update');
const stockController = require('./controllers/stockController');
const PORT = process.env.PORT || 80;
const cors = require('cors')
const app = express();
const morgan = require('morgan');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const LocalStrategy = require("passport-local");
const connectEnsureLogin = require('connect-ensure-login'); 
const helmet = require('helmet');
const router = require('./controllers/stockController');
const expressSession = require('express-session')({
   secret: 'secret',
   resave: false,
   saveUninitialized: false
});

app.use(helmet.hidePoweredBy());
/*router.use(helmet.csp({
	defaultSrc:["'self'"],
	scriptSrc:['*.google-analytics.com'],
	styleSrc:["'unsafe-inline'"],
	imgSrc:['*.google-analytics.com'],
	connectSrc:["'none'"],
	fontSrc:['*.cryptic-eyrie-86960.herokuapp.com'],
	objectSrc:[],
	mediaSrc:[],
	frameSrc:[]
}));*/

//Setting-up Mongoose
mongoose.plugin(mongoosePatchUpdate);
mongoose.Promise = global.Promise;

//Connecting to mongoose
mongoose.connect("mongodb+srv://db_user:OkltmzmFo5BNq5hk@cluster0.h04va.mongodb.net/Cluster0?retryWrites=true&w=majority",{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then( connection => {
   console.log('Successfully connected to Mongodb')
}).catch( err => {
   console.log('error connecting to MongoDB');
   console.log(err);
   process.exit();
}); 

const Schema = mongoose.Schema;
const UserDetail = new Schema({
   username:String,
   password:String
});

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo',UserDetail,'userInfo');
UserDetails.register(new UserDetails({username:'paul'}),'paul');
UserDetails.register(new UserDetails({username:'leitinho'}),'cabecao');
UserDetails.register(new UserDetails({username:'admin'}),'admin')

//Setting up morgan
app.use(expressSession);
app.use(morgan('combined'));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

passport.use(new LocalStrategy(UserDetails.authenticate()));
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

app.use('/stock',
   stockController
);
app.post('/login', passport.authenticate("local", {}), function(req,res) {

});
/*(req,res,next)=>{
   passport.authenticate('local',
      (err,user,info) => {
         if(err){
            return next(err);
         }
         /*if(!user){
            return res.redirect('/login?info='+info);
         }*/
/*         req.logIn(user,function(err){
            if(err){
               return next(err);
            }
         });
         return res.redirect('https://cryptic-eyrie-86960.herokuapp.com/wallet');
      }
   )
})*/
app.get('/',(req,res,next)=>{
   res.status(200).send("Seja bem vindo à API do exame de CES-26");
})
app.listen(PORT);
