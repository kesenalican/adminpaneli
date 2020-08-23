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


var bolumId = queryString.split("?")[1].substring(8)

const sinavTable = document.getElementsByName("ffc")[0];

// URL'de gönderilen email değişkenini bulur.


index = 0
index_inner = 0
db.collection("bolumler").doc(bolumId).collection("sinavlar").get().then((snapshot) => {
    snapshot.forEach(function (childSnapshot) {
        sinavId = childSnapshot.id

        // DATA
        sinavName = childSnapshot.data()["sinavAdi"]

        // REFERANS NESNESİ
        ref = childSnapshot.ref.path

        // DETAY LİNKİNİ OLUŞTUR
        var sinavLink = "sinav_detay.html?bolumId=%BOLUMID&bolumName=%BOLUMNAME&sinavId=%SINAVID&sinavName=%SINAVNAME"
            .replace("%BOLUMID", bolumId)
            .replace("%BOLUMNAME", bolumName)
            .replace("%SINAVID", sinavId)
            .replace("%SINAVNAME", sinavName);


        // HTML'İ HAZIRLA
        let tr = document.createElement("tr");

        html = `<tr>
        <td><a href="` + sinavLink + `">%ff</a></td>

        <td><a href="` + sinavLink + `">
        <button class="btn btn-primary btn-block col-md-4">
                    Sınav Detayı
                    </button></a>
        </td>
        <td>
        <td><a onclick="remove('%PATH%'); return false;" href="">Kaldır</a> </td>
        </td>
    </tr>`

        html = html.replace("%ff", sinavName).replace("%PATH%", ref);
        tr.innerHTML = html;

        // EKRANA BAS
        sinavTable.appendChild(tr);



    });


});


function remove(path) {
    db.doc(path).delete().then(function () {
        location.reload();
    });
}