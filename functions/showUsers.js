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


const uyeTable = document.getElementsByName("ssf")[0]


db.collection("uyeler").get().then((snapshot) => {
    snapshot.forEach(function (childSnapshot) {

        // üye bilgileri çekme
        var isim = childSnapshot.data()["isim"] + " " + childSnapshot.data()["soyisim"];
        var email = childSnapshot.data()["email"];
        var bolum = childSnapshot.data()["hangiBolum"];

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


