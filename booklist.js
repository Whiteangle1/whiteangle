var booklist={
    1:{"name":"head first c","author":"david Griffith","genre":"fiction","pubyear":"1990"},
    2:{"name":"c programming Guide","author":"Greg perry","genre":"programming","pubyear":"1992"},
    3:{"name":"c++ Primer","author":"stanley B.Lippman","genre":"story","pubyear":"1998"},
    4:{"name":"c++ programming Reference","author":"Bjarne Stroustrup","genre":"reference","pubyear":"1997"}
}
function getAll(){
    return booklist;
}
function get(id){
    return booklist[id];

}
function add(book){
    let lastId=Object.keys(booklist).length + 1;
    booklist[lastId]=book;
}
function update(id,book){
    if (booklist[id]){
        booklist[id]=book;
    }
}
function remove (id, book){
    if(booklist[id]){
        delete booklist[id];
    }
}
module.exports={getAll,get,add,update,remove}