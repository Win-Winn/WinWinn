const db =require("../DB")


let temp = [{
  task: 'First Task',
  categories: 'some Categories',
  price: 'some Price',
  isUrgent: true,
  scheduledDate: new Date(),
  location:'Amman',
  booking: false,
  userRating: 4,
  serveceProviderRating: 4.5,
  serveceProvider: 'serveceProvider name'
}]

let creatFirstPost = (cb) => {
  db.posts.create(temp, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data);
      // getall(cb)
    }
  })
}
                    
// creatFirstPost(temp)

let getall = cb => {
    db.posts.find({}, (err, data) => {
      if (err) {
        cb(err);
      } else {
        console.log("data:", data);
        cb(data);
      }
    });
  };

  module.exports = {
    creatFirstPost,
    getall,  
  }