// fill in javascript code here
let form=document.querySelector("form");
let tbody=document.querySelector("tbody");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        name:form.name.value,
        id:form.employeeID.value,
        department:form.department.value,
        experience:form.exp.value,
        email:form.email.value,
        mobile:form.mbl.value,
    }
    display(obj);
})
function display(data){
let tr=document.createElement("tr");
let name=document.createElement("td");
name.innerText=data.name;
let id=document.createElement("td");
id.innerText=data.id;
let department=document.createElement("td");
department.innerText=data.department;
let exp=document.createElement("td");
exp.innerText=data.experience;
let email=document.createElement("td");
email.innerText=data.email;
let mob=document.createElement("td");
mob.innerText=data.mobile;
let role=document.createElement("td");
let roleText=giveRole(data.experience);
role.textContent=roleText;
let deleteEl=document.createElement("td");
deleteEl.addEventListener("click",function(e){
    e.target.parentNode.remove();
})
deleteEl.innerText="Delete";
tr.append(name,id,department,exp,email,mob,role,deleteEl);
tbody.append(tr);
}
function giveRole(experience){
    if(experience>5){
        return "Senior";
    }else if(experience>=2 && experience<=5){
            return "Junior";
    }
    else if(experience<=1){
        return "Fresher";
    }
}