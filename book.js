const express=require("express")
const booklist=require("./booklist")
const bookRoute=express.Router();
bookRoute.route("/book/:id?")
.get((req,res)=>{
    if(req.params && req.params.id){
        return res.json(booklist.get(req.params.id))
    }else{
        return res.json(booklist.getAll());
    }
})
.post((req,res)=>{
    if(req.body){
        if(req.body.id){
            booklist.update(req.body.id, req.body)
        }else{
            booklist.add(req.body)
        }
    }
    res.redirect("/book")

})
.put((req,res)=>{
    if(req.params && req.params.id && req.body){
        booklist.update(req.params.id, req.body)
    }
    res.redirect("/book")
})
.delete((req,res)=>{
    if(req.params && req.params.id){
        booklist.remove(req.params.id)
        }
    res.redirect("/book")
})
module.exports=bookRoute;