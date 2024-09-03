//from:对象转数组
// let obj = {
//     1:'a',
//     2:'b',
//     length:2,
// }

// let arrs = Array.from(obj)
// console.log(arrs)

//falt:数组扁平化
// let arrs = [1, 2, [3, 4,[5]]] 
// arrs = arrs.flat(3)
// console.log(arrs)

//sort:排序
let arrs = [3, 4, 1, 8, 5]
arrs.sort((e1,e2) =>{
    return e1 > e2
})
console.log(arrs)