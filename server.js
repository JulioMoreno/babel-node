import express from "express";
import suma from "./suma";

const app = new express();

app.get('/', (req, res)=> {
    let r = suma(2,5);
    console.log(r);
res.json({message: 'Exit!'})
});

app.listen(3001, '127.0.0.1', () => {
    console.log('Server is works')
});