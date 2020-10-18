

// -----------------------------------------------------------------------------------------
// Assigment
// -1

// var user = prompt("Enter Your number");
    
// window.alert(Number(user));
// -----------------------------------------------------------------


// 2-



// Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No

// var user =prompt("Enter Your Number can divide by 3 and 4 and 1 to 15 ") ;
    
// if (user % 3==0 && user %4==0) {
//     alert("yeees");
// }

// else
// {
//     alert("no");
// }

// ------------------------------------------------------------------------------
// 3-
// var num1 = prompt("Enter Number 1 to 5");
// var num2 = prompt("Enter Number 1 to 5");


// if (Number(num1) > Number(num2) ) 
// {
//     window.alert(num1);
// }
// else if (Number(num1) < Number(num2)) {
//     window.alert(num2);
// }
// ----------------------------------------------------------------------
// 4- Write a program that allows the user to insert an integer then print negative 
// if it is negative number otherwise print positive. 

// var x = Number(prompt("Enter your Number"));
// if (x < 0) {
//     window.alert( "Negative");
// }

// else if (x > 0) {
//     window.alert( "positive"); 
// }
// -------------------------------------------
// 5-
// Write a program that take 3 integers from user then print the max element and the min element. Example 
// 1 Input:7,8,5 Output: max element = 8 min element = 5 

// var x = Number(prompt("Enter Number One"));
//     y = Number(prompt("Enter Number two"));
//     z = Number(prompt("Enter Number three"));

//     if (x < y && x < z) {
//         window.alert("Min Number=" + x);
//     }
//     else if (y < x && y < z) {
//         window.alert("Min Number=" + y);
//     }
//     else  {
//         window.alert("Min Number=" + z);
//     }
    



    
// if (x > y && x > z) {
//     window.alert("Max Number=" + x);
// }
// else if (y > x && y > z) {
//     window.alert("Max Number=" + y);
// }
// else  {
//     window.alert( z);
// }
// -----------------------------------------------------------------

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var x = Number(prompt("enter your Number"));

// if (x%2==0) {
//     window.alert("is oven");
// }
// else  {
//     window.alert("is odd");

// }
// --------------------------------------------------------------------------------
// 8-
// var x = prompt("Enter  vowel chars ");


// if (x === "a") {
//     window.alert("vowel");
// }
// else if (x==="e") {
//     window.alert("vowel");
// }
// else if (x==="l") {
//     window.alert("vowel");
// }
// else if (x==="o") {
//     window.alert("vowel");
// }
// else if (x==="u") {
//     window.alert("vowel");
// }
// else
// {
//     window.alert("consonant");
// }
// ------------------------------------------------------------------
// 9-
// var x = prompt("Enter yor Number");
// for ( var i = 1 ; x >= i ; i++ ) {
    
//     window.console.log(i);
// }
// ---------------------------------------------------------
// -10
// var x = Number( prompt("Enter yor Number"));

// for ( var i = 1 ; i <=12 ; i++ ) {
    
//     window.console.log(i*x);
// }

// ----------------------------------------------------------------------

// -11
// var x = Number( prompt("Enter yor Number"));
    
// for ( var i= 0 ; x > i ; i++ ) {
    
//    if (i%2==0) {
//        console.log(i);
//    }
// }

// ------------------------------------------------------------------------
// -12
// var num1 = prompt("Enter Your Number");
// var num2 = prompt("Enter Your Number");
// var sum = "";
//  sum = 1;
// for (var i = 1 ; i <= num2 ; i++) {
//     sum=sum*num1 ;
    
// };
// window.alert(sum);

// ---------------------------------------------------------
// 12-
// var num1 = Number(prompt("Enter your Number one"));
// var num2 = Number(prompt("Enter your Number two"));
// var num3 = Number(prompt("Enter your Number three"));
// var num4 = Number(prompt("Enter your Number four"));
// var num5 = Number(prompt("Enter your Number five"));
// var result = num1 + num2 +num3 +num4;
// var average = result/5
//window.alert(result);
//window.alert(average);


// ------------------------------------------------------------------------
// 13-
// var month = Number(prompt("Enter Your Month"));
// for (var i = 1 ; i <= 31 ; i++) {
//     if (month==1) {
//         console.log(i);
//     }
    
    
// };
// -----------------------------------------------------------------
// 14- 
// function myFunction(z) {
//     if (Number(z)>=90&&Number(z)<=100) {
//         window.alert("Grand A")
//     }
//     else if (Number(z)>=80&&Number(z)<90) {
//         window.alert("Grand B")
//     }
//     else if (Number(z)>=70&&Number(z)<80) {
//         window.alert("Grand c")
//     }
//     else if (Number(z)>=60&&Number(z)<70) {
//         window.alert("Grand D")
//     }
//     else if (Number(z)>=50&&Number(z)<60) {
//         window.alert("Grand E")
//     }
//     else
//     {
//         window.alert("Grand F")
//     }
// }
// var z = prompt("Enter the mark one");
// myFunction(z);
// var x = prompt("Enter the mark two");
// myFunction(x);
// var s = prompt("Enter the mark three");
// myFunction(s);
// var y = prompt("Enter the mark four");
// myFunction(y);
// var c = prompt("Enter the mark five");
// myFunction(c);

// --------------------------------------------------------------
// function calcPrice(price ,  porfit , markting)
// {
//     result1 = price + porfit;
//     result2 = result1 * 1.2;
//     result3 = result2 + markting;
//     result4 = result3 +50;
//     console.log(result4);
// }
// calcPrice(100 , 70 , 50 );

// --------------------------------------------
// getAve1(30 , 40); ------> function Declaration ~~!!!
// function getAve1(x , y)
// {
//     var sum = x + y ;
//     var result = sum/2;
//     console.log(result);
// }





// var getAve1 = function (x , y)  // ----->Expresion ~~!!!
// {
//     var sum = x + y ;
//     var result = sum/2;
//     console.log(result);
// };
// getAve1(30 , 40);

// -------------------------------------------------------------
// var client = 
// {
//     name :"Hesham",
//     salary :"8000",
//     age : 23,
//     gender: "mail",
//     isMarred:false,
//     son :{Name :"Mohamed", age :5}

// }
// console.log(client.isMarred);


// var x = function()
// {
//      x = 100;
//      console.log(x);
// }
// ();  
   
   
// var user = {
//     name:'Hesham Eed',
//     Gender : 'Male',
//     Marrid : false ,
//     login:function()
//     {
//         console.log("welcom Ser");
//     } 

// }

// console.log(user.Gender);

// var user = [
//     {
//     name:'hesham',
//     age:'23'
// }
// ,
// {
//     name:'adel',
//     age:'27'
// }
// ]
// console.log(user[1]);
// var colors = ['15' , '30', '22','44']
// colors.sort();
// // var x = colors.slice(1,3,"Hesham","mai");
// // console.log(x);
// for (var i = 0 ; i < colors.length ; i++) {
//     console.log(colors[i]);
    
// }


// -------------------------------------------------
// var productNameInput = document.getElementById("productNameInput");
// var productPriceInput = document.getElementById("productPriceInput");
// var productcategoryInput = document.getElementById("productcategoryInput");
// var productDescerptionInput = document.getElementById("productDescerptionInput");
// var productNameAlert = document.getElementById("productNameAlert");


// var productList ;
// if (localStorage.getItem("ourProducts") == null) {
//     productList=[];
// }
// else
// {
//     productList= JSON.parse(localStorage.getItem("ourProducts"));
//     displayProduct(productList);
// }

// function validateProductName() {
//     var regx = /^[A-Z][a-z]{3,8}$/;
//     if (regx.test(productNameInput.value)== true) {
//         productNameAlert.classList.replace("d-block","d-none");
//         productNameInput.classList.add("is-valid");
//         productNameInput.classList.remove("is-invalid");
        

//     }
//     else
//     {
//         productNameAlert.classList.replace("d-none","d-block");
//         productNameInput.classList.add("is-invalid");
//         productNameInput.classList.remove("is-valid");

//     }
// }
// productNameInput.addEventListener("keyup", validateProductName);
// function addProduct()
// {
//     var product =
//     {
//         name:ProductNameInput.value,
//         price:productPriceInput.value,
//         category:productcategoryInput.value,
//         desc:productDescerptionInput.value
//     }
//     productList.push(product);
//     localStorage.setItem("ourProducts" , JSON.stringify(productList) );
//     displayProduct(productList);
//     clearForm();
    
// }
// function clearForm() {
//     ProductNameInput.value= "";
//     productPriceInput.value = "";
//     productcategoryInput.value = "" ;
//     productDescerptionInput.value = "" ;
// }

// function displayProduct(anyArray)

// {
//     var cartona = "";
//     for (var i = 0 ; i <anyArray.length; i++ ) {
        
//         cartona +=`<tr>
//         <td>${i}</td>
//         <td>${anyArray[i].name}</td>
//         <td>${anyArray[i].price}</td>
//         <td>${anyArray[i].category}</td>
//         <td>${anyArray[i].desc}</td>
//         <td><button class="btn btn-warning">updat</button></td>
//         <td><button onclick="deleteProduct(${i});" class="btn btn-danger">delete</button></td>
//         </tr>`;
//     }
//     document.getElementById("tbody").innerHTML = cartona;
// }


// function deleteProduct(index)
//  {
//     productList.splice(index ,1);
//     localStorage.setItem("ourProducts" , JSON.stringify(productList) );
//     displayProduct(productList);
// }
// function searchProduct() {
//     var term = searchInput.value;
//     var wantedProducts = [];
//     for(i = 0 ; i < productList.length; i++)
//     {
//         if(productList[i].name.toLowerCase().includes(term.toLowerCase()))
//         {
//              wantedProducts.push(productList[i]);
//         }
//     }
//     displayProduct(wantedProducts);
// }






















var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productcategoryInput = document.getElementById("productcategoryInput");
var productDescerptionInput = document.getElementById("productDescerptionInput");
var productNameAlert = document.getElementById("productNameAlert");
var productList=[];

if (localStorage.getItem("ourProducts") == null) {
    productList = [];
}
else
{
    productList =JSON.parse(localStorage.getItem("ourProducts"));
    displayProduct();
}
function validateProductName() {
    var regx = [/^[A-Z][a-z]{3,8}$/];
    if (regx.test(productNameInput.value) == true) {
        productNameAlert.classList.replace("d-block" , "d-none");
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");

    }
    else{
        productNameAlert.classList.replace("d-none" , "d-block");
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
    }
}
productNameInput.addEventListener("blur",validateProductName)
function addProduct() {
    product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productcategoryInput.value,
        desc:productDescerptionInput.value,
    }
    productList.push(product);
    localStorage.setItem("ourProducts" , JSON.stringify(productList));
    displayProduct();
    clearProduct();
}


function displayProduct() {
    cartona='';
    for (let i = 0; i < productList.length; i++) {
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td><button class="btn btn-warning rounded">Updat</button>
        </td>
        <td><button onclick='deleteProduct()' class="btn btn-danger rounded">Delete</button></td>
    </tr>
        `
        
    }
    document.getElementById("tbody").innerHTML = cartona;
}

function clearProduct() {
    productNameInput.value ='';
    productPriceInput.value ='';
    productcategoryInput.value='';
    productDescerptionInput.value='';
}
function deleteProduct(index) {
    productList.splice(index,1);
    localStorage.setItem("ourProducts" , JSON.stringify(productList));
    displayProduct();
}
function searchProduct() {
    term= searchInput.value;
    wantedProduct = [];
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().include) {
            wantedProduct.push(productList)
        }
        
    }
}

