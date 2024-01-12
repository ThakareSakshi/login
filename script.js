
const username=document.querySelector("#username");
const firstname=document.querySelector("#firstname");
const lastname=document.querySelector("#lastname");
const password=document.querySelector("#userPassword");
const userdata=document.querySelector(".userdata");
const loginform=document.querySelector("form");
const logoutBtn=document.querySelector("#logoutBtn");


const loginBtn=document.querySelector("#login-btn")

// ----------------event for logout-------------
logoutBtn.addEventListener("click",()=>{
    userdata.style.display="none";
    loginform.style.display="flex";
    logoutBtn.style.display="none";
    window.sessionStorage.clear();
})

let userName=window.sessionStorage.getItem(username);

//-----------------login event------------------
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const validUser=Data.filter((user)=>user.username==username.value && user.password==password.value);
    if(validUser.length>0){
        window.sessionStorage.setItem("userid",username.value);
        window.sessionStorage.setItem("password",password.value);
        displayuserData();
    }
   
      
})

// -----------------function to display userdata in table----------- 
function displayuserData(){
    userdata.style.display="block";
    loginform.style.display="none";
    logoutBtn.style.display="block";
    let container=document.createElement("div")
    let table=document.createElement("table");
    container.appendChild(table);
    Data.forEach((user)=>{
       let tablerow=document.createElement("tr");
       let delBtn=document.createElement("button");
       delBtn.classList.add("delete");
       delBtn.innerText="delete";



       tablerow.innerHTML=`
       <td editabble="true" class="uname">${user.username}</td>
       <td ediatbale="true" class="upassword">${user.password}</td>
       <td><button onClick="deleteRow(event)">delete</button></td>
       <td><button onClick="editRow(event)">edit</button></td>
       
       `
    //    let td=document.createElement("td");
    //    td.appendChild(delBtn)
    //    tablerow.appendChild(td);
       
       table.appendChild(tablerow);




    })
  userdata.innerHTML=container.innerHTML;
}


//---------------------function to delete row---------------------
function deleteRow(e){
e.target.parentNode.parentNode.remove();


}
// -----------------function to edit row---------------------
function editRow(e){
   let uname= e.target.parentNode.parentNode;
   console.log(uname);
   let newname=prompt("enter username");
   let newpassword=prompt( "enter new password");
   uname.children[0].innerText=newname;
   uname.children[1].innerText=newpassword;


}
