var myName;
var names =[];
var names2;
var usertr=document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    Create();
    Read();
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

function Read(){
    usertr.innerHTML='';
    names2= JSON.parse(localStorage.getItem("names"));
    if (names2==null) {
        usertr.innerHTML+=`
        <tr>
            <th class="space">#</th>
            <th class="space">Product name</th>
            <th class="space"></th>
        </tr>
        `
    } else {
        usertr.innerHTML+=`
        <tr>
            <th class="space">#</th>
            <th class="space">Product name</th>
            <th class="space"></th>
        </tr>
        `
        for(var i=0; i<names2.length; i++){
            usertr.innerHTML+=`
            <tr>
                <td class="space">${i+1}</td>
                <td class="space">${names2[i]}</td>
                <td class="space">
                    <button class="delete-btn" Onclick="Delete(${i})">x</button>
                    <button class="edit-btn" Onclick="Update(${i})"><i class="fa-solid fa-pen"></i></button>
                </td>
            </tr>
            `
        }
    }
}

function Update(i3){
    let names4= JSON.parse(localStorage.getItem("names"));
    usertr.innerHTML='';
    usertr.innerHTML+= `
        <tr>
            <th class="space">#</th>
            <th class="space">NAME</th>
            <th class="space">OPERATIONS</th>
        </tr>
    `
    for(var i=0; i<names4.length; i++){
        if (i==i3) {
            usertr.innerHTML+=`
            <tr>
                <td class="space">${i+1}</td>
                <td class="space"><input id="newName" placeholder="${names4[i]}"></input></td>
                <td class="space">
                    <button class="cancel-btn" Onclick="Read()">x</button>
                    <button class="update-btn" Onclick="Update2(${i})"><i class="fa-solid fa-check"></i></button>
                    
                </td>
            </tr>
            `
        } else {
            usertr.innerHTML+=`
            <tr>
                <td class="space">${i+1}</td>
                <td class="space">${names2[i]}</td>
                <td class="space">
                    <button class="edit-btn" Onclick="Update(${i})"><i class="fa-solid fa-pen"></i></button>
                    <button class="delete-btn" Onclick="Delete(${i})">x</button>
                </td>
            </tr>
            `
        }
    }
}

function Update2(i){
    let names5=JSON.parse(localStorage.getItem("names"));
    names5[i] = document.getElementById("newName").value;
    if (names5[i]=='') {
        alert("Write the product name");
    } else {
        localStorage.setItem("names", JSON.stringify(names5));
        Read();
    }
}

function Delete(i2) {
    let names3 = JSON.parse(localStorage.getItem("names"));
    names3.splice(i2,1);
    localStorage.setItem("names", JSON.stringify(names3));
    Read();
}

function clearTask(){
    localStorage.clear();
    Read();
}