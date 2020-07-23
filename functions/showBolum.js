const database = firebase.database().ref("/bolumler/");
const bolumTable = document.getElementsByName("bcd")[0];



    database.on("value", function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
        
        // bölüm bilgileri çekme
        var bolumAdi = childSnapshot.val()["bolumAdi"];
        var bolumSinavSayisi = childSnapshot.val()["bolumSinavSayisi"];
  
                
        // tr elementini oluşturma
        let tr = document.createElement("tr");

        let bolumAdi_td = document.createElement("td");
        bolumAdi_td.innerText = bolumAdi;

        let bolumSinavSayisi_td = document.createElement("td");
        bolumSinavSayisi_td.innerText = bolumSinavSayisi;

        let bolumdetay_td = document.createElement("td");
        bolumdetay_td.className = "text-right";

        let link_bolumDetay_a = document.createElement("a");
        link_bolumDetay_a.href = '../examples/bolum_detay.html?bolumAdi=%s'.replace('%s', bolumAdi);

        bolumdetay_td.appendChild(link_bolumDetay_a);

        let button_bolumDetay = document.createElement("button");
        button_bolumDetay.className = "btn btn-primary btn-block";
        button_bolumDetay.innerText = "BÖLÜM DETAY";
        
        
        link_bolumDetay_a.appendChild(button_bolumDetay);

        tr.appendChild(bolumAdi_td)
        tr.appendChild(bolumSinavSayisi_td)
        tr.appendChild(bolumdetay_td)

        bolumTable.appendChild(tr);


        });
    });
 