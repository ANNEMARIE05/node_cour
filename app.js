const express = require("express");
const app = express();
// CRUD create , read , update , delete

// req.params pour recuperer les parametre de url
// pour creer un user on utilise la mehode post
const todotodoBD = [
    { id: 1, userid: 1, tache: 'code', terminer: false },
];

// methode Get pour create
// app.use pour utiliser des middleWare
app.use(express.json());
app.post("/api/todo", (req, res) => {
  const body = req.body;
  const tache = { id: todoBD.length + 1 , ...body};
  todoBD.push(tache);
  res.send(tache);
  console.log(tache);
  console.log(todoBD);
});

// methode Get pour read
// req.params pour recuperer les parametre de url
app.get(("/api/todo/:id"), (req, res)=>{
    const id = parseInt(req.params.id)
    const tache = todoBD.find((element)=> element.id === id )

    res.json( {
        status: !!tache,
        data: tache
    })
})


// methode put pour Update
app.put(("/api/todo/:id"), (req, res)=>{
    let body= req.body
    const id = parseInt(req.params.id)
    let tache = todoBD.findIndex((element)=> element.id === id )
    if (!tache) {
        return res.json({status:false, message:"la tache n'existe pas"})
    }

    tache = {...tache, ...body}
    const indiceTache = todoBD.findIndex((element)=> element.id === id)
    todoBD.splice(indiceTache,1)
    todoBD.push(tache)

    console.log(todoBD);

    res.json( {
        status: true,
        data: tache
    })
})




// methode delete pour Delete
app.delete(("/api/todo/:id"), (req, res)=>{
    let body= req.body
    const id = parseInt(req.params.id)
    let tache = todoBD.findIndex((element)=> element.id === id )
    if (!tache) {
        return res.json({status:false, message:"la tache n'existe pas"})
    }

    tache = {...tache, ...body}
    const indiceTache = todoBD.findIndex((element)=> element.id === id)
    todoBD.splice(indiceTache,1)

    console.log(todoBD);

    res.json( {
        status: true,
        message: "supprimer avec succes"
    })
})

// app.get("/api/test", (req,res)=>{
//     res.send("salut")
// })

// app.post('/api/post', (req,res)=>{
//     res.send("post")
// })


const userTodo ={
    id: 1,
    nom:"Marie",
    prenom:"Pelou",
    email:"mariepelou@gmail.com",
    password:"mp"
}

app.get("/api/user/", (req,res)=>{

    
})





app.listen(3000, () => {
  console.log("notre serveur est bien en marche");
});
// http://localhost:3000



