console.log("all is well in the history of usman ghani");
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("this is theh first app ");
});

app.get("/login", (req, res) => {
  res.send("this is the login page ");
});

app.get("/logout", (req, res) => {
  res.send(
    "this is the latest setup of photoshop and illustrator in the monkey of the most eviroment variable"
  );
});
app.get("/start", (req, res) => {
  res.send("this is the resopnse of the start page ");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "this is first joke " },
    { id: 2, title: "This is second joke" },
    { id: 3, title: "This is third joke" },
    { id: 4, title: "This is fourth joke" },
    { id: 5, title: "This is fifth joke" },
    { id: 6, title: "This is sixth joke" },
  ];
  res.send(jokes);
});




const port = 3000;

app.listen(port, () => {
  console.log(`the server is running on ${port}`);
});
