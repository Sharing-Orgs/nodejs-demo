const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Welcome to NodeJs!</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>Hi, " + name);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`))

