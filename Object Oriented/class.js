//   class Rectangle {
//       constructor(lengths,width){
//         this.lengths = lengths;
//         this.width = width;
//       }

//       getArea(){
//         return this.lengths* this.width;
//       }
//       getPerimeter(){
//         return 2*(this.lengths + this.width)
//       }

//   }

// const Area = new Rectangle(12,10);
// console.log(`the perimeter of reactangle is ${Area.getPerimeter()}`);
// console.log(`The area of the reactangle is ${Area.getArea()}`);


// =============== example of inherit class =================

// class Vehicle {
//     constructor(model,year){
//         this.model = model;
//         this.year = year;
//     }
    
//     detail(){
//         return console.log(` the model of car is ${this.model} and the year is ${this.year}`);
//     }

// }

// class Car extends Vehicle {
//     constructor(door,model,year){
//         super(model, year);
//         this.door = door;
//     }

//     detail(){
//         super.detail();
//         return console.log(`the  door is ${this.door}`);
//     }

// }
   
//      const pro = new Car(4,2024,13);
//     console.log(pro.detail());

//  ============ Example of functionality of method ============

// class BankAccount {
//     constructor(accountNo,blance){
//         this.accountNo= accountNo;
//         this.blance = blance;

//     }

//     withDraw(amount){
//         return this.blance = this.blance - amount;
//     }
//     deposit(amount){
//         return this.blance = this.blance + amount;
//     }
// }

// const user = new BankAccount(121000108767,40000);
// console.log(user.withDraw(500))


// ==================== Other example of class ===================



