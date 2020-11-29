// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!». 

 const ageA = prompt('Input your age');
 console.log("Hello, I am " + ageA + " years old.");

// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років. 

const year = 2020;
let age;
age = year - prompt('Input your year bathday');
console.log("You are " + age + " years old.");

// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр. 

  
let a1 = prompt('Input the first side of the triangle');
let a2 = prompt('Input the second side of the triangle');
let a3 = prompt('Input the third side of the triangle');
let p =Number(a1) + Number(a2) + Number(a3);   // використав number так як змінні мали стрічковий тип і периметр не рахувався
console.log("Perimeter of the triangle is " + p);

// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі) 

const pi = 3.14;
let radius = prompt('Input radius of the circle');
console.log(pi * radius * radius);

// 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть
//  відстань. 

const v = 50;
let time = prompt('How much time you will go (in hour?');
let s = v * time;
console.log("Driver's distance is " + s);

// 6. Реалізуємо конвертер кілометрів в милі і навпаки =) 

let mile = prompt('Input miles ');
console.log("kilometer" + (mile * 1.6));
let km = prompt('Input kilometer ');
console.log("miles" + ( km / 1.6));


// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. 
//  скільки бензину він може купити та скільки грошей у нього залишиться.

let money = prompt('How many money is in your bankcard?');
let price = prompt('Input price of the oil');
let liter = parseInt(money / price);
let moneyCh = money - (liter * price);
console.log("You can bay " + liter + " liters and your have " + moneyCh + " money");

// варіант 2 але деколи видає неправельний результат
let money = prompt('How many money is in your bankcard?');
let price = prompt('Input price of the oil');
let liter = money % price;
let moneyCh = money - (liter * price);
console.log("You can bay " + liter + " liters and your have " + moneyCh + " money");
