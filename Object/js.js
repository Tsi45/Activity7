//function two 

const newHTML = function () {
    function Display() {
        this.fullName = document.getElementById('fullname').value;  // fullname=   full name input   field   id 
        this.phone = document.getElementById('phone').value;  // phone=  phone   input  field   id 
        this.age = document.getElementById('age').value;  // age=  age  input  field   id 


    }
    var newObject = new Display();

    var render = function () {
        parent = document.getElementById('render');  //  render:empty div   id
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = `<h1>Full Name: ${newObject.fullName}</h1><h1>Age: ${newObject.age}</h1><h1>PhoneNo.: ${newObject.phone}</h1>`;
        parent.appendChild(div)
    }
    render();
}



document.getElementById('submitBtn').addEventListener('click', newHTML);  // button  to click  with Id  submitBtn

