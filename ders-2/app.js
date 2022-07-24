let price ="0"
let user="ismail"


console.log(price==1)
console.log(price==100)

console.log("=== :", price===1 )
console.log("=== :", price===100)

console.log(user!="guest")

console.log("price<100",price<100)


console.log("price<=100",price<=100)

console.log("price > 100",price > 100 )

price=0
console.log(price>0 && user!="guest")


console.log(price>0 || user!="guest")


user="guest"
price=1
console.log(price> 0 && !user=="guest")