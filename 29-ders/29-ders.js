let domain= "kodluyoruz"
let isActive = false
let items = [15, 25, 35,isActive,domain]
console.log(items)

let emptyArray = [] //bos liste

console.log(
    items.length //array icindeki oge sayisi
)


console.log( items[0] )

console.log( items[items.length - 1] )


console.log(
    typeof(items)
)


console.log(
    Array.isArray(items)
)

console.log("[]",Array.isArray([]))
console.log("1 :",Array.isArray([1]))
console.log("true :",Array.isArray([true]))

