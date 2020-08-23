var getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

params = getParams(window.location.href);

var bolumId = params["bolumId"]
var bolumName = params["bolumName"]
var sinavId = params["sinavId"]
var sinavName = params["sinavName"]


var header = document.getElementById("sinavHeader")


soruEkleHTML = ' <tr><td><button name = "yeniSoruButton" class="btn btn-primary btn-block col-md-4 "id="mySoruEkleButton">Soru Ekle</button><div id="myModal" class="modal col-md-8"><div class="modal-content"><span class="close">&times;</span><p>Lütfen Soru Tipini Seçiniz</p><a href="../examples/dogru_anlami_isaretle.html?sinavId=%yy?bolumId=%tt"><button class="btn btn-primary btn-block col-md-4">Doğru Anlamı İşaretle</button></a><a href="../examples/turkce_yaz.html?sinavId=%KK?bolumId=%LL"><button class="btn btn-primary btn-block col-md-4">Türkçe Yaz</button></a><a href="../examples/eksik_kelime.html?sinavId=%MM?bolumId=%NN"><button class="btn btn-primary btn-block col-md-4">Eksik Kelime</button></a><a href="../examples/turkceye_cevir.html?sinavId=%PP?bolumId=%OO"><button class="btn btn-primary btn-block col-md-4">Türkçeye Çevir</button></a></div></div></td></td></tr>'
    .replace("%ff", sinavName)
    .replace("%yy", sinavId)
    .replace("%tt", bolumId)
    .replace("%KK", sinavId)
    .replace("%LL", bolumId)
    .replace("%MM", sinavId)
    .replace("%NN", bolumId)
    .replace("%PP", sinavId)
    .replace("%OO", bolumId);




let div_fake = document.createElement("div");
div_fake.id = "sinavHeader";
div_fake.className = "card-header";

header_inner_html = '<h4 id = class="card-title">;;</h4>'
    .replace("&&", bolumId)
    .replace(";;", bolumName.replace("%20", " ") + " Bölümü  ->  " + sinavName + " Sınavı")
    + soruEkleHTML

div_fake.innerHTML = header_inner_html;

header.appendChild(div_fake);





// Alert dialog Soru tipi seçme js kodları
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByName("yeniSoruButton")[0];


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
