var myName;
var names =[];
var names2;
var usertr=document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    Create();
    document.getElementById("form").reset();
});

function Create(){
    let storage = JSON.parse(localStorage.getItem("names"));
    myName=document.getElementById("name").value;
    if(myName=='') {
        alert("Write the product name");
    } else {
        if (storage==null) {
            names.push(myName);
            localStorage.setItem("names", JSON.stringify(names));
        } else {
            names=JSON.parse(localStorage.getItem("names"));
            names.push(myName);
            localStorage.setItem("names", JSON.stringify(names));
        }
    }
}