
/*
let i = prompt("Insert Start Number","1-100");

if(i % 2 ===0) {
    console.log(`${i} is Even. Here is All Even Numbers to 1000`);
    for(i = 0; i < 1000 ;i += 2) {
        console.log(i)
    }
}
else {
    console.log(`${i} is Odd. Here is All Odd Numbers to 1000`);
    for(i = 1; i < 1000 ;i += 2) {
        console.log(i)
    }
}

alert("Check Console")
*/
// ----------------do while------------------
/*
let allPrices = 0;
let i = 0;

do {
    allPrices += Number(prompt(` قیمت محصول ${i+1} را وارد کنید.`));
    i++
} while (i < 5)

alert(`مجموع سبد خرید شما برابر است با ${allPrices} هزار تومان`)
*/

// -------------------سامانه ی ثبت نام----------------------
/*
const users = [
   {id:1, name: "negin", lastName: "jalali", age: 21}, 
   {id:2, name: "zahra", lastName: "yari", age: 48}, 
   {id:3, name: "reza", lastName: "jalali", age: 12}, 
]

let namee = prompt("Enter Your Name.");
let lastName = prompt("Enter Your Last Name.");
let age = prompt("Enter Your age.");

if(namee.length < 3 || namee.length > 10) {
    alert(`Enter your name correctly. your name can't be ${namee}`)
} 
else if (lastName.length < 3 || lastName.length > 15) {
    alert(`Enter your last name correctly. your last name can't be ${lastName}`)
}
else if (isNaN(age) || age.length > 3 || age >= 150) {
    alert(`Enter your age correctly. your age can't be "${age}"`)
}
else {
    let userNo4 = {
        id: 4,
        name: namee,
        lastName: lastName,
        age: age 
    }
    users.push(userNo4)
    console.log(users);
}
*/
// --------------------------چک کردن وجو نام کاربر----------------------------
/*
const users = [
    "negin",
    "mahsa",
    "sara",
    ]
    let user = prompt("نام خود را وارد کنید.")
    let isLogin = users.includes(user)
    
    if(isLogin === true) {
      alert("به پنل کاربری خود خوش آمدید")
    } else {
      alert("نام شما در لیست موجود نیست")
    }
]
*/
/*
const products = [
    {id:1, name: "تبلت", price: 22000000},
    {id:2, name: "موبایل", price: 12000000},
    {id:3, name: "اپل واچ", price: 5000000},
    {id:4, name: "ایرپاد", price: 2500000},
    {id: 5, name: "خودکار الکترونیکی",price: 25000}
]
const basket = [
    {id: 1, name: "خودکار الکترونیکی",price: 250000},
    {id:2, name: "ایرپاد", price: 2500000},
  ]
let userProductChoice = prompt("نام محصول انتخابی خود را وارد کنید")

let requestProduct;
let isAvailable = products.some(
    function(product){
        if(product.name == userProductChoice){
            requestProduct = product;
            return true
        }    
    }
)
let newProduct;
let sum = 0;
if(isAvailable === true) {
    newProduct = {
        id: 3,
        name: requestProduct.name,
        price: requestProduct.price,
    }
    basket.push(newProduct)
    alert("محصول به سبد خرید شما اضافه شد")
    basket.forEach(function(product){
        sum += product.price
    })
    console.log(`the total price will be ${sum}`);
    
} else{
    alert("عدم موجودی!")
}
console.log(basket)
*/
// ------------فروشگاه پیچیده-------------
/*
const products = [
    {name: "phone", price: "20000000"},
    {name: "milk", price: "36000"},
    {name: "speaker", price: "5000000"},
    {name: "hand cream", price: "56000"},
];

const basket = [
    {name: "vire", price: "32000"},
    {name: "face wash", price: "100000"},
    {name: "fruits", price: "60000"},
    {name: "LED screen", price: "5000000"},
]


let takeOrder = prompt("choose \n 1: add product to your basket \n 2: Delet product from your basket")


if(takeOrder == 1) {
    console.log("Basket before adding",basket);
    var userProductName = prompt("Choose the product to add to basket \n name: phone, price: 20000000 \n name: milk, price: 3600 \n name: speaker, price: 5000000 \n name: hand cream, price: 56000")

    var productData;
    var isInShop = products.some(function(product) {
        if(product.name === userProductName){
            productData = product
            return true
        } else{
            alert("Not availabe")
        }
    })
    if(isInShop === true) {
        var newProduct =
            {
                name: productData.name,
                price: productData.price
            }
        basket.push(newProduct)

        alert("Added to the basket")
        console.log("basket = ", basket);
    }


} else if (takeOrder ==2){
    console.log("Basket before deleting",basket);
    var userProductName = prompt("Choose the product to delet from basket \n name: vire, price: 32000 \n name: face wash, price: 100000 \n name: fruits, price: 60000 \n name: LED screen, price: 5000000")

    var productIndex = basket.findIndex(function(product) {
        if (userProductName === product.name){
            return userProductName === product.name
        } else {
            alert("Not availabe")
        }
        
    })


    basket.splice(productIndex, 1)
    alert("Deleted succesfully")
    
    console.log("basket = ", basket);
} else {
    alert("Write it correctly")
}
*/

// ----------------------map/filter------------------------
/*
const basket = [
    {name: "vire", price: 32000},
    {name: "face wash", price: 100000},
    {name: "fruits", price: 60000},
    {name: "LED screen", price: 5000000},
]

let isUnder = basket.filter(function(less){
    return less.price < 100000
})

let postCost = isUnder.length * 1000;
let sum = 0;
let TotalBasket = basket.forEach(function(price){
    sum = sum + price.price
})
let totalPrices = sum + postCost

console.log("The total price with the posting fee will be: ", totalPrices);
*/
// ----------------------To Do List ------------------------ 
/*
let toDoList = [
    {todoName:"doing the dishes", state: "Done"},
    {todoName:"doing the homeworks", state: "Not Done"},
    {todoName:"cooking", state: "Not Done"},
]
// پرسش از کاربر
let answer;
function getNumber() {
    while(true) {
        answer = +prompt("Choose \n 1- Add to list \n 2- Delet Task \n 3- Done Task")


        if(answer == 1 || answer == 2 || answer == 3) {
            break;
        } else {
            alert("choose the right one")
        }
    }
}
getNumber()

 // نمایش تسک های قبلی  
// console.log("Your Tasks Here: ", toDoList); 


// اضافه کردن تسک  
let newTask;  
if (answer == 1) {   
    // اضافه کردن تسک جدید  
    let taskName = prompt("Add the Task Name");  

    newTask = {  
        todoName: taskName,  
        state: "Not Done"  
    };  
    
    toDoList.push(newTask);  
    
    // نمایش دوباره ی تسک های قبلی  
    console.log("Your Tasks with the new one Here: ", toDoList);  



} else if (answer == 2) {   
    // حذف تسک 
    let taskNameToDelete = prompt("nter The Name of One of Your Tasks to Delete It");  
    let isInTasks = toDoList.some(task => task.todoName === taskNameToDelete);  

    if(isInTasks) {
        toDoList = toDoList.filter(task => task.todoName !== taskNameToDelete);  
        console.log("Updated Task List: ", toDoList);
    }else {
        alert("Not In Your Tasks, Add It")
    }

} 
else if (answer == 3) {  
    // نام تسک برای تغییر وضعیت دادن  
    let taskNameToChange = prompt("Enter The Name of One of Your Tasks");  
    // بررسی وجود داشتن تسک بین لیست  
    let taskIndex = toDoList.findIndex(task => task.todoName === taskNameToChange);  

    // اگر تسک وجود داشت  
    if (taskIndex !== -1) {  
        // تغییر وضعیت تسک  
        toDoList[taskIndex].state = "Done";  
        console.log("State Changed, Your List: ", toDoList);  
    } else {  
        console.log("Task not found.");  
    }  
}
    */

// --------------------تزمون انلاین-----------------------
/*
// سوالات و جواب ها

let allQuestions = [

    {questionId: 1, questionTitle : "2+2", questionAnswer: "4"},
    {questionId: 2, questionTitle : "3*6", questionAnswer: "18"},
    {questionId: 3, questionTitle : "10/5", questionAnswer: "5"},
    {questionId: 4, questionTitle : "80-90", questionAnswer: "-10"},
]

// نشان دادن سوال ها به کاربر

let score = 0
let userAnwer;
allQuestions.forEach(function(question){

    userAnswer = prompt(question.questionTitle + "?")
    
    if(userAnswer === question.questionAnswer){
        score++
    } else {
        alert("wrong")
    }
})
console.log("Your scores sum : ", score)
*/
// ---------------------تایمر----------------------
/*
let m = +prompt("enter minutes")
let s = +prompt("enter seconds")

let timer = setInterval(function(){
    console.log(m + ":" + s);
    s--;

    if(s == -1) {
        m--
        s = 59
    }
    if(m ==-1) {
        clearInterval(timer);
        alert("you've reached to end")
    }
}, 50)
*/
// ------------------------------------------
let userNameInput = document.querySelector('.input__user-name')
let passwordInput = document.querySelector('.input__password')
let modal = document.getElementById('error-message')
let userNameValue = userNameInput.value ;
let passwordValue = passwordInput.value ;


function checkValidation(){




    if(userNameInput.value.length < 12 || passwordInput.value.length < 8) {
        modal.innerHTML = 'لطفا اطلاعات خود را به درستی وارد کنید' ;
        modal.style.backgroundColor = '#B8001F'


    }else{
        modal.innerHTML = 'با موفقیت وارد حساب خود شدید';
        modal.style.backgroundColor = '#626F47'

    }
    modal.style.display = 'inline'
    setTimeout(function(){
        modal.style.display = 'none'
    },3000)
}

// تعریف اخطار های تعداد کلمات
let userNameWarning = document.getElementById('user-name__warning')
let passwordWarning = document.getElementById('password__warning')


// فانکشن چک کردن تعداد کاراکتر های نوشته شده
function checkUserNameCharacters() {

    if(userNameInput.value.length < 12){
        userNameWarning.innerHTML = 'نام کاربری باید حداقل ۱۲ کاراکتر باشد'
        userNameWarning.style.color = '#B8001F'
        userNameWarning.style.visibility = 'visible' 

    }else{
        userNameWarning.innerHTML = 'نام کاربری صحیح است'
        userNameWarning.style.color = '#3a8128'
    }
}

function checkPassCharacters(){
    if(passwordInput.value.length < 8){
        passwordWarning.innerHTML = 'رمز عبور باید حداقل ۸ کاراکتر باشد'
        passwordWarning.style.color = '#B8001F'
        passwordWarning.style.visibility = 'visible' 

    }else{
        passwordWarning.innerHTML = 'رمز عبور صحیح است'
        passwordWarning.style.color = '#3a8128'
    }
}