


// 1) ამოცანა -----------------------------------

// //   ამოიღეთ user ცვლადის სტუდენტის სტატუსი;\

// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
//   };

// console.log(user['studentstatus'])


// 2) ამოცანა ------------------------------------------------------------------------------------------------

// შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი(for da while ციკლით);

// for ციკლით----------------

// let names = ['irakli', 22, '33', 'giorgi', 'levani', 'ani', 'nini'];

// for (let x = 0; x < names.length; x++) {
//     console.log(names[x]);
// }

//while ციკლით--------------

// let names = ['irakli', 'davit', 'giorgi', 'levani', 'ani', 'nini'];

// let z = 0;
// while(z < names.length) {
//     console.log(names[z]);
//     z++;
// }

// 3)ამოცანა ------------------------------------------------------------------------------------------------------

//შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for(let item of numbers) {
//     if (item > 5) {
//         console.log(item);
//     }
// }

// 4)ამოცანა ------------------------------------------------------------------------------------------------------

//თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// Hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }

// if (user.age < 18 && user.studentstatus === 'active') {
//     console.log('hello');
// } else if(user.name === 'levani') {
//     console.log('hello levani');
// } else if(user.studentstatus === 'active' || user.age <25){
//     console.log('hello world')
// } else {
//     console.log('error');
// }

// 5)ამოცანა ------------------------------------------------------------------------------------------------------

//გამოიტანეთ მარტო სრტინგები;

// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

// for(let item of array) {
//     if (typeof item == "string") {
//         console.log(item);
//     }
// }

// 6)ამოცანა ------------------------------------------------------------------------------------------------------

//მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

// for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]); //[ 2, -3, 5, 10 ] [ 25, -24, -11, 100 ] [-6, -7, 10]
//     let numbers = array[i];
//     // console.log(numbers);
//     for (let x =0; x < numbers.length; x++) {
//         // console.log(numbers[x]);
//         if (numbers[x] > 0) {
//             console.log(numbers[x]);
//         }
//     }
// }

// for (let item of array) {
//     for (let y of item) {
//         if (y > 0) {
//             console.log(y);
//         }
//     }
// }


// 7)ამოცანა ------------------------------------------------------------------------------------------------------

// 1.ამოიღეთ მარტო ლუწი რიცხვები
// 2.ამოიღეთ კენტი რიცხვები 


// let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

// for (let y of array) {
//    if (y % 2 != 1) {
//     console.log(y);
//    }
// }

// for (let y of array) {
//    if (y % 2 != 0) {
//     console.log(y);
//    }
// }

// 8)ამოცანა ------------------------------------------------------------------------------------------------------

//Კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'nino', status: true},
//     {username: 'levani', status: false},
//     {username: 'nana', status: true},
//     {username: 'anna', status: true},
// ]

// for (let element of users) {
//     if (element.status == true) {
//         console.log(element);
//     }
// }
