var bolumId = queryString.split("?")[1].substring(8)
const database = firebase.database().ref("/bolumler/" + bolumId);

const sinavTable = document.getElementsByName("ffc")[0];

// URL'de gönderilen email değişkenini bulur.


index = 0
index_inner = 0

database.on("value", function (snapshot) {
    
    snapshot.forEach(function (childSnapshot) {
        if (index == 3){childSnapshot.forEach(function(babySnapshot)
            {
            sinavId = babySnapshot.key
            sinavName = babySnapshot.val()["sinavAdi"]
            

            let tr = document.createElement("tr");
            html = ' <tr><td><a href="">%ff</a></td><td><button name = "rtd" class="btn btn-primary btn-block col-md-4 "id="mySoruEkleButton">Soru Ekle</button><div id="myModal" class="modal col-md-8"><div class="modal-content"><span class="close">&times;</span><p>Lütfen Soru Tipini Seçiniz</p><a href="../examples/dogru_anlami_isaretle.html?sinavId=%yy?bolumId=%tt"><button class="btn btn-primary btn-block col-md-4">Doğru Anlamı İşaretle</button></a><a href="../examples/turkce_yaz.html?sinavId=%KK?bolumId=%LL"><button class="btn btn-primary btn-block col-md-4">Türkçe Yaz</button></a><a href="../examples/eksik_kelime.html?sinavId=%MM?bolumId=%NN"><button class="btn btn-primary btn-block col-md-4">Eksik Kelime</button></a><a href="../examples/turkceye_cevir.html?sinavId=%PP?bolumId=%OO"><button class="btn btn-primary btn-block col-md-4">Türkçeye Çevir</button></a></div></div></td></td></tr>'.replace("%ff",sinavName).replace("%yy",sinavId).replace("%tt",bolumId).replace("%KK",sinavId).replace("%LL",bolumId).replace("%MM",sinavId).replace("%NN",bolumId).replace("%PP",sinavId).replace("%OO",bolumId);

                tr.innerHTML = html;

                sinavTable.appendChild(tr);

                 // Alert dialog Soru tipi seçme js kodları
                // Get the modal
                var modal = document.getElementById("myModal");

                // Get the button that opens the modal
                var btn = document.getElementsByName("rtd")[index_inner];


                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[index_inner];


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

                index_inner += 1

        
            }
        )
    }
        index += 1


})});

