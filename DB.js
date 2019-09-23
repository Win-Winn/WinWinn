const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/wins', { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', function () {
    console.log('mongoose connection error');
    console.log('____________________________')
  });
  
  db.once('open', function () {
    console.log('mongoose connected successfully');
    console.log('____________________________')
  });


let userSchema = new mongoose.Schema({
    userName: String,
    phone: Number,
    password:String,
    photo: String,
    age: Number,
    rating: Number
  });
  
  
  let postSchema = new mongoose.Schema({
    task: String,
    time: Boolean,
    categories: String,
    price: String,
    isUrgent: Boolean,
    scheduledDate: Date,
    location: String,
    booking: Boolean,
    userRating: Number,
    serveceProviderRating: Number,
    serveceProvider: String
  });
  

  let users = mongoose.model('users', userSchema);
  let posts = mongoose.model('posts', postSchema);
  
  
  module.exports = {
    users,
    posts
  }