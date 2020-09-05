const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());    //unblocking cors policy
app.use(express.json());    // this will help to read the data coming in body :: TEXT to JSON

app.use(express.urlencoded({ extended: true })); // BODY

//const readdb = require("./read_db");
const signdb = require("./addsignup_db");

// http://localhost:3000/adduser?username=hello
// http://localhost:5500/adduser
app.post("/signup", async (req, res) => {
    try {
      const input = req.body;
      await signdb.addSignUpParam(input);
  
      res.json({ message: "success" });
    } 
    
    catch (err) {
      res.sendStatus(500);
    }
  });


app.post("/logincheck", async (req, res) => {
    try {

      const input = req.body;
      console.log(input);
      const result = await signdb.checkSignUpParam(input);
      console.log(result);
      res.json({ message: result });
    } 
    
    catch (err) {
      res.sendStatus(500);
    }
  });

app.put("/resetadd", async (req, res) => {
  try {
    const input = req.body;
    //console.log(input);
    await signdb.resetSignUpParam(input);

    res.json({ message: "success" });
  } 
  
  catch (err) {
    res.sendStatus(500);
  }
});  
  
  
  
//started server...
app.listen(5500);