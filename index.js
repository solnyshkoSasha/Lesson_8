// // for (let i = 100; i > 10; i /= 2) {
// //   console.log(i);
// // }

// // let i = 0;
// // while (i < 15) {
// //   console.log(i);
// //   i += 2;
// // }

// let x = 100;
// do {
//   console.log(x);
//   x /= 2
// } while (x > 10);

// for (let i = 10; i > 0; i--) {
//   if (i == 2) break;

//   if (i % 2 == 0) continue;

//   console.log(i);
// }

let nums = [5, 6, 2, 7, 100, 10];

for (let i = 0; i < nums.length; i++) {
  nums[i] *= 2;
  console.log("Element is: " + nums[i]);
}