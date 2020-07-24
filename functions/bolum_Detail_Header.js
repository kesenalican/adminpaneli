const queryString = window.location.search;
var bolumId = queryString.split("?")[1].substring(8)
var bolumName = queryString.split("?")[2].substring(10)


var header = document.getElementById("bolumHeader") 

    
let div_fake = document.createElement("div");
div_fake.id = "bolumHeader";
div_fake.className = "card-header";

header_inner_html = '<h4 id = class="card-title">;;</h4><a href="../examples/sinav_olustur.html?bolumId=&&"><button class="btn btn-primary btn-block col-md-4">SINAV OLUŞTUR +</button></a>'.replace("&&",bolumId).replace(";;",bolumName.replace("%20"," ") + " Bölümü")

div_fake.innerHTML = header_inner_html;
    
header.appendChild(div_fake);
    
