const express=require("express");
const app=express();
// console.log(app);

let port =3030;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("new incoming request encuntered:");
//     res.send("this is a basic response");
// });

// app.get("/apple",(req,res)=>{
//    const fruit = res.send({
//         name:apple,
//         color:Red,
//         taste:sweet
//     })
//     console.log(fruit);
// })

// app.get("/apple",(req,res)=>{
//      res.send("this is apple path");
//  })

//  app.get("/orange",(req,res)=>{
//     res.send("this is orange path");
// })

// app.get("/",(req,res)=>{
//     res.send("this is root path");
// })

// app.get("*",(req,res)=>{
//     res.send("not exists at all");
// })

// app.get("/:username/:id",(req,res)=>{
//     let {username, id}= req.params ;
//     res.send(`this accounts belongs to @${username }`);
// });

app.get("/search",(req,res)=>{
    let { q }= req.query;
    if (!q){
        res.send("nothing searched");
    }
    res.send(`this is ${ q }`);
});