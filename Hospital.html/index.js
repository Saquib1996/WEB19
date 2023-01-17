let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let obj = {
        name: form.name.value,
        DoctorId: form.docID.value,
        department: form.dept.value,
        experience: form.exp.value,
        email: form.email.value,
        mobile: form.mbl.value,
    }
    display(obj);
})
function display(data) {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = data.name;
    let id = document.createElement("td");
    id.innerText = data.DoctorId;
    let department = document.createElement("td");
    department.innerText = data.department;
    let experience = document.createElement("td");
    experience.innerText = data.experience;
    let email = document.createElement("td");
    email.innerText = data.email;
    let mobile = document.createElement("td");
    mobile.innerText = data.mobile;
    let role = document.createElement("td");
    let roleText = giveRole(data.experience);
    role.textContent = roleText;
    let deleteEl = document.createElement("td");
    deleteEl.style.cursor = "pointer";
    deleteEl.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    })
    deleteEl.innerText = "Delete";
    tr.append(name, id, department, experience, email, mobile, role, deleteEl);
    tbody.append(tr);
}
function giveRole(experience) {
    if (experience > 5)
        return "Senior";
    else if (experience >= 2 && experience <= 5)
        return "Junior";
    else if (experience <= 1)
        return "Fresher";
}