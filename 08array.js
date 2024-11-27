const myArr = [0,1,2,3,4,5,6,7]
console.log(myArr)

// myArr.push(8)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(9))


// myArr.unshift(6)
// console.log(myArr)
// console.log(myArr.includes(6))
// const newArr = myArr.join();
// console.log(typeof newArr)

///silice/////splice
console.log("A" , myArr);

const myyarr = myArr.slice(1,4)
console.log(myyarr);
console.log("B" , myArr);

const myyarr1 = myArr.splice(1,4)
console.log("C" , myyarr1);
console.log(myyarr1);