import express from "express";
import bodyParser from "body-parser";
let data;
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const options = ["rock", "paper", "scissors"];
    var randomIndex=Math.floor(Math.random() * options.length)
    const cpu = options[randomIndex];
    const player = req.body.choice;
    console.log(cpu);
    console.log(player);
    console.log(randomIndex);
    if(cpu===player){
        res.render("index.ejs",{ cpuVal: cpu, playerVal: player,data:"Its a draw.🤝" })
    }
    else if(cpu==="rock"&&player==="scissors"||cpu==="scissors"&&player==="paper"||cpu==="paper"&&player==="rock"){
    res.render("index.ejs", { cpuVal: cpu, playerVal: player ,data:"CPU won ! 🚩"});}
    else{
        res.render("index.ejs",{cpuVal: cpu, playerVal: player ,data:"🏴 Player won !"})
    }
});
app.listen(port, () => {
    console.log('Success! Server is running on port', port);
});
