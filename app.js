const express = require('express');
const app = express();

app.set('port', process.env.PORT || 9000);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get('/', (req,res) => {
res.send("Hello from Chat-Bot App from heroku");
})

try {
  app.listen(app.get('port'), function () {
      console.log('Listening on port 9000...');
  })
} catch(err){
  console.log("Error in Dbconnection",err)
}