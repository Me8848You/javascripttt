var diffX, diffY, element;

//initially invoked on grab
function grabber(event) {
  console.log("grabber called");
  element = event.currentTarget;

  var posX = parseInt(element.style.left);
  var posY = parseInt(element.style.top);

  diffX = event.clientX - posX;
  diffY = event.clientY - posY;

  //assign event listeners for mousemove and mouseup event
  document.addEventListener("mousemove", mover, true);
  document.addEventListener("mouseup", dropper, true);

  event.stopPropagation();
  event.preventDefault();
}

//mover function(called while dragging the element)
function mover(event) {
  element.style.left = event.clientX - diffX + "px";
  element.style.top = event.clientY - diffY + "px";
  //console.log(element.style.left, element.style.top);

  event.stopPropagation();
}

//invoked on dropping the element
function dropper(event) {
  document.removeEventListener("mousemove", mover, true);
  document.removeEventListener("mouseup", dropper, true);
  event.stopPropagation();
}

// HW:  event.stopPropagation()  and event.preventDefault()

//dom element access

function handleClick() {
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
  
    console.log(userName, userEmail);
    //writing to document
    //   //access the target element
    //   var targetElement = document.getElementById("display_area");
    //   targetElement.innerHTML =
    //     "<h2 style='color:red'>Hello " +
    //     userName +
    //     " your email is " +
    //     userEmail +
    //     "</h2>";
  
    //   document.getElementById("name").value = "";
    //   document.getElementById("name").placeholder = "Enter name";
  
    //validating name
    var pos = userName.search(/^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)?$/);
    var nameError = document.getElementById("name_error");
    //for email
    var pos2 = userEmail.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var emailError = document.getElementById("email_error");
  
    if (pos == -1) {
      //access span element
      nameError.innerHTML = "<span style='color:red'>*Invalid name</span>";
    } else {
      nameError.innerHTML = "<span style='color:green'>Name is Valid</span>";
    }
    if (pos2 == -1) {
      emailError.innerHTML = "<span style='color:red'>*Invalid email</span>";
    } else {
      emailError.innerHTML = "<span style='color:green'>Email is Valid</span>";
    }
  }
  © 2022 GitHub, Inc.



  // //access element
// //1.

// var form1 = document.forms[0].elements[0];

// console.log(form1);

// form1.style.backgroundColor = "red";
// form1.style.fontSize = "20px";

// //accessing second forms second element
// var elem2 = document.forms[1].elements[1];

// elem2.style.border = "1px solid red";

//***************************** second approach */
//2.by tagname

var form1 = document.getElementsByTagName("form")[0];

form1.style.border = "1px solid red";

var form2 = document.getElementsByClassName("form")[1];
form2.style.border = "1px solid blue";

var element = document.8("useremail")[0];
element.style.border = "2px solid green";







//function to print multiplication table of given number
function multiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}
//function call
multiplicationTable(5);

//function to find factorial of a number
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
//function call
console.log(factorial(5));


//function to find sum of two numbers
function sum(num1, num2) {
    return num1 + num2;
}

var result=sum(1,2);
console.log('sum=',result);

//function to find sum of given array
var arraySum=function(arr) {
    var sum=0;
    for (var i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    console.log('sum of array=',sum);
}

//function call
// var result=sumArray([1,2,3,4,5]);
// console.log('sum of array=',result);

arraySum([1,2,3,4,5]);


function display(){
    console.log(this.name+" "+this.age);
}
//constructor
function Person(name,age) {
    this.name=name;
    this.age=age;
    this.display=display;
}




var person1=new Person('John',25);

console.log(person1);
var person2=new Person('binay',26);
console.log(person2);

person2.display();











var diffX, diffY, element;

//initially invoked on grab
function grabber(event) {
  console.log("grabber called");
  element = event.currentTarget;

  var posX = parseInt(element.style.left);
  var posY = parseInt(element.style.top);

  diffX = event.clientX - posX;
  diffY = event.clientY - posY;

  //assign event listeners for mousemove and mouseup event
  document.addEventListener("mousemove", mover, true);
  document.addEventListener("mouseup", dropper, true);

  event.stopPropagation();
  event.preventDefault();
}

//mover function(called while dragging the element)
function mover(event) {
  element.style.left = event.clientX - diffX + "px";
  element.style.top = event.clientY - diffY + "px";
  //console.log(element.style.left, element.style.top);

  event.stopPropagation();
}

//invoked on dropping the element
function dropper(event) {
  document.removeEventListener("mousemove", mover, true);
  document.removeEventListener("mouseup", dropper, true);
  event.stopPropagation();
}

// HW:  event.stopPropagation()  and event.preventDefault()