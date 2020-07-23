const database = firebase.database().ref("/uyeler/");
const uyeTable = document.getElementsByName("ssf")[0]



database.on("value", function (snapshot) {
    snapshot.forEach(function(childSnapshot) {
        
        // üye bilgileri çekme
        var isim = childSnapshot.val()["uyeAdi"] + " "+childSnapshot.val()["uyeSoyadi"];
        var email = childSnapshot.val()["uyeEmaili"];
        var bolum = childSnapshot.val()["uyeBolum"];
                
        
        // tr elementini oluşturma
        let tr = document.createElement("tr");

        let img_td = document.createElement("td");
        img_td.innerText = isim

        let email_td = document.createElement("td",);
        email_td.innerText = email;

        let bolum_td = document.createElement("td");
        bolum_td.innerText = bolum;

        let uyedetay_td = document.createElement("td");
        uyedetay_td.className = "text-right";

        let link_UyeDetay_a = document.createElement("a");
        link_UyeDetay_a.href = '../examples/uye_detay.html?email=%s'.replace('%s', email);

        
        uyedetay_td.appendChild(link_UyeDetay_a);

        let button_UyeDetay = document.createElement("button");
        button_UyeDetay.className = "btn btn-primary btn-block";
        button_UyeDetay.innerText = "ÜYE DETAY";
        
        
        link_UyeDetay_a.appendChild(button_UyeDetay);

        tr.appendChild(img_td)
        tr.appendChild(email_td)
        tr.appendChild(bolum_td)
        tr.appendChild(uyedetay_td)

        uyeTable.appendChild(tr);


        });
    });




