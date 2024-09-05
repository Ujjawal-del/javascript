let a = 10;
console.log(a);
console.log(typeof a);
//abhi null type ka pta karna beta comment to kar hi lega.
let b = 0;
console.log(b);
//ek object bna.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person.age);
  console.log(person.firstName);

  const ujju = {
    fullName: "ujjawal giri",
    age: 22,
    education: "B.Tech",
    hobby: "gym"
  };
  console.log(ujju.age);
  console.log(ujju.hobby);

  //operator
  // let num1 = 12;
  // let num2 = 23;
  // console.log(num1 + num2);
  // console.log(++num1);
  // console.log(num2++);
  // console.log(num1**2);
  // num2 += 1;
  // console.log(num2);
  // console.log(num1 === num2);//false
  // let num3 = num2 - num1;
  // console.log("check logical",(num3 === num2) || (num1 ===num3));
 
  //alert or prompt check kariyo
  // let p1 = prompt("enter a number");
  // console.log(p1);

  //loops
  // for(let i=1; i<=5; i++){
  //     console.log("welcome back ujjwal");
  // };
  
  let i=1;
  while(i<6){
    console.log("welcome back ujjwal");
    i++;
  }

let brick="dog is here";
console.log(brick);
console.log(brick.length);
console.log(brick[1],brick[5]);

//template literals
let temt=`  this my college  `;
console.log(temt);
let a1 = 12;
temt= `this my ${a1} college`;
console.log(temt);
console.log(brick.toUpperCase());
console.log(temt.trim());
let p = brick.concat(temt);
console.log(p);

//arrays
let firstarr = ["banana","cake","tea","bread"];
console.log(firstarr);

for(let i=0;i<firstarr.length;i++){
  console.log(firstarr[i]);
}

//avg
let marks = [85,97,44,37,76,60];
let sum = 0;
for(let i=0;i<marks.length;i++){
  sum = marks[i]+sum;

}
let avg = sum/marks.length;
console.log(avg);

marks.push(45,70,20);
console.log(marks);
let tst = firstarr.toString();
console.log(tst);
firstarr.shift();
console.log(firstarr);

console.log(marks.slice(1));
//ques
let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("amazon");
console.log(companies);
  //ques
  let arr1 = [2,3,4,5];
  let ultimatesq = arr1.forEach((val)=>{
    let square1 = val*val;
    return square1;
  })
  console.log(ultimatesq);

  console.log("hi chutki");
console.log(window);

  
  