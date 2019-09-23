const db =require("../DB")

let temp = [{
  userName: 'someOne',
  phone: '0777888888',
  password: 'somePassword',
  photo: 'someLink',
  age: '24',
}]


let insertFirstUser = (cb) => {
  db.users.create(temp, (err, data) => {
    if (err) {
      cb(err)
    } else {
      getall(cb)
    }
  })
}



let getall = cb => {
    db.users.find({}, (err, data) => {
      if (err) {
        cb(err);
      } else {
        console.log("data:", data);
        cb(data);
      }
    });
  };

  module.exports = {
    insertFirstUser,
    getall,  
  }
