let userName = prompt("kullanıcı bilginizi yazınız")
let info = document.querySelector("#info")
info.İnnerHTML = `${userName.length > 0 ? userName :"kullanıcı bilginiz bulunamadı :( "}`