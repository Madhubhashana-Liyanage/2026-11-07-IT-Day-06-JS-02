console.log("hello");

// class Customer{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }
// let customer1 = new Customer ("John", 30, "123 Main St, USA");
// let customer2 = new Customer ("Jane", 32, "13 Main St, USA");
// let customer3 = new Customer ("July", 28, "136 Main St, USA");

// console.log(customer1);
// console.log(customer2);
// console.log(customer3);  Java wala me vidihata unata, JS vala pahala thiyena widihata(22 to 28)

// let Customer = {
//     name: "John",
//     age: 30,
//     address: "123 Main St, USA",
// }

// console.log(Customer);

// ------------------------------------------------------
// let CustomerList = [
//     {
//        name: "John",
//        age: 30,
//        address: "123 Main St, USA",
//        items: [
//         {
//             itemName: "Laptop",
//             itemPrice: 150000,
//         },
//         {
//             itemName: "Phone",
//             itemPrice: 85000,
//         },
//         {
//             itemName: "Car",
//             itemPrice: 4500000,
//         }
//        ] 
//     },
//     {
//        name: "John",
//        age: 30,
//        address: "123 Main St, USA", 
//     },
//     {
//        name: "John",
//        age: 30,
//        address: "123 Main St, USA", 
//     },
// ];

// console.log(CustomerList);
// console.log(CustomerList[0].items[0].itemName);
// -------------------------------------------------------

// ------------------DOM Manipulation (DOM - Document Object Model)------------------
// web api ekak, static site wenas karanna DOM eka bavitha karanawa.

// console.log(document);

// document.write("<h1>Hello World!</h1>");
// document.write("<h2>Hello World!</h2>");

// let title = document.getElementById("title");
// console.log(title);

// title.innerText = "Saman Kumara";

// let number = 0;
// function btnClickMeOnAction() {
//     // let title = document.getElementById("title");
//     // console.log(title);

//     title.innerText = "Saman Kumara" + number++;
// }

// let number = 0;
// function btnIncrementOnAction(){
//   number++;
//   numberCount.innerText = "Number Count - " +number;
// }

// function btnDecrementOnAction(){
//    number--;
//    numberCount.innerText = "Number Count - " +number;

// }

// function btnSubmitOnAction(){
//     let txtName = document.getElementById("txtName");
//     console.log(txtName.value);

//     submitedName.innerText = "My Name is : " + txtName.value;
// }

// function btnAddOnAction() {
//     let inputnum1 = document.getElementById("txtNum1");
//     let inputnum2 = document.getElementById("txtNum2");

//     console.log(inputnum1.value);
//     console.log(inputnum2.value);
    
//     let result = parseInt(inputnum1.value)+parseInt(inputnum2.value);
//     outPut.innerText = "Result is - " + result;
// }
// function btnSubtractOnAction() {
//     let inputnum1 = document.getElementById("txtNum1");
//     let inputnum2 = document.getElementById("txtNum2");

//     console.log(inputnum1.value);
//     console.log(inputnum2.value);
    
//     let result = parseInt(inputnum1.value)- parseInt(inputnum2.value);
//     outPut.innerText = "Result is - " + result;
// }


// ---------- Custoemr Form APP -----------------

let customerList = [];
function btnSubmitOnAction() {

    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

   let customer = {
         name:txtName,
         address:txtAddress,
         age:txtAge,
         email:txtEmail,
         salary:txtSalary
   }
   console.log(customer);
   customerList.push(customer);
   console.log(customerList);
   btnLoadTableOnAction();
   resetInputFields();
}
// function btnLoadTableOnAction(){
//    let tblCustomer = document.getElementById("tblCustomer");

//    tblCustomer.innerHTML += `
//         <tr>
//             <td>Saman</td>
//             <td>Colombo</td>
//             <td>25</td>
//             <td>saman@example.com</td>
//             <td>50000</td>
//         </tr>
//    `
// }


function btnLoadTableOnAction() {
     let tblCustomer = document.getElementById("tblCustomer");

     let body = "";

     for (let i = 0; i < customerList.length; i++) {
            body += `
        <tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
         </tr>
       `
     }
     tblCustomer.innerHTML = body;


}

function resetInputFields() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtSalary").value = "";
}