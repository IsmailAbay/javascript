//veri Türünü Öğrenmek ve Veri Türü Dönüşümleri

//veri türünü öğrenmek typeof
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

//string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
number1 = parseInt(number1)
console.log(
    "number1:", parseInt(number1), typeof(number1)  )

    let number2 = "11px"
number1 = parseInt(number2)
console.log(
    "number2:", parseInt(number2), typeof(number2)  )
