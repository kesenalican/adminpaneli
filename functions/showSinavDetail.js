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


const sinavTable = document.getElementsByName("ffc")[0];


index = 0
index_inner = 0
db.collection("bolumler").
    doc(bolumId)
    .collection("sinavlar")
    .doc(sinavId)
    .collection("sorular")
    .get().
    then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
            // DATA
            data = childSnapshot.data()

            // REFERANS NESNESİ
            ref = childSnapshot.ref.path

            // SORU DATASINI HAZIRLA
            soruId = childSnapshot.id
            soruTipi = data["soruTipi"]
            ingilizceCumle = data["ingilizceCumle"]
            turkceCumle = data["turkceCumle"]
            ingilizceKelime = data["ingilizceKelime"]
            turkceKelime = data["turkceKelime"]
            eksikKelime = data["eksikKelime"]
            yanlis1 = data["yanlis1"]
            yanlis2 = data["yanlis2"]


            // HTML'İ HAZIRLA
            var html = `  <tr>
           
            <td>%SORUMETNI%</td>

            <td><a onclick="remove('%PATH%'); return false;" href="">Kaldır</a> </td>

                </tr>`;

            var soruMetni;
            if (ingilizceCumle !== null) {
                soruMetni = ingilizceCumle;
            }
            else if (ingilizceKelime !== null) {
                soruMetni = ingilizceKelime;
            }

            html = html.replace("%SORUMETNI%", soruMetni).replace("%PATH%", ref);



            // EKRANA BAS
            const sorularTable = document.getElementsByName("sorularTable")[0];
            var div = document.createElement("tr");
            div.innerHTML = html;
            sorularTable.appendChild(div);





        });


    });

function remove(path) {
    db.doc(path).delete().then(function () {
        location.reload();
    });
}