// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQLZskKTK8dy2m5l4s_omVCu9dX-Qx2TU",
    authDomain: "ingilizce-uygulama.firebaseapp.com",
    databaseURL: "https://ingilizce-uygulama.firebaseio.com",
    projectId: "ingilizce-uygulama",
    storageBucket: "ingilizce-uygulama.appspot.com",
    messagingSenderId: "1030944748630",
    appId: "1:1030944748630:web:886ee4a9bea6a2c903b7f7",
    measurementId: "G-B7VLPNCBSN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


const bolumTable = document.getElementsByName("bcd")[0];

 
db.collection("bolumler").get().then((snapshot) => {

        snapshot.forEach(function(childSnapshot) {
        
        // bölüm bilgileri çekme
        var bolumAdi = childSnapshot.data()["name"];
        var bolumSinavSayisi = 1; // şimdilik
        var bolumId = childSnapshot.id;
           
                
        // tr elementini oluşturma
        let tr = document.createElement("tr");

        let bolumAdi_td = document.createElement("td");
        bolumAdi_td.innerText = bolumAdi;

        let bolumSinavSayisi_td = document.createElement("td");
        bolumSinavSayisi_td.innerText = bolumSinavSayisi;

        let bolumdetay_td = document.createElement("td");
        bolumdetay_td.className = "text-right";

        let link_bolumDetay_a = document.createElement("a");
        link_bolumDetay_a.href = '../examples/bolum_detay.html?bolumId=%s?bolumName=%d'.replace('%s', bolumId).replace("%d", bolumAdi);

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
 