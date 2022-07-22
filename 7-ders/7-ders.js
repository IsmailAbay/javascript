// template literals kullanımı
//https://developer.mozilla.org/en-US/docs/Web/javaScript/Reference/Template_Literals

let username = "ismail"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
console.log("merhaba", username, "sitemize hoşgeldin", "mail adresin:", email )

let info = `merhaba ${username} sitemize hoşgeldin.. mail adresin ${email} 
mail adresinin uzunluğu:${email.length}
borcunuz ${(2 + 3) * 10 } TL
gunun saat bilgisi ${new Date().getHours() }
kısa isminiz:${username[0]}.`
console.log(info)
 

//ismini yanlış yazmışım :)