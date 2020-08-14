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

const userName = document.getElementById("userName");
const userSurname = document.getElementById("userSurname");
const userEmail = document.getElementById("userEmail");
const userimg = document.getElementById("userImage");
const addNewUserButton = document.getElementById("addUserButton");


addNewUserButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Veritabanıına kullanıcı ekleme
    db.collection("uyeler").doc(userName.value).set({
        isim: userName.value,
        soyisim: userSurname.value,
        email: userEmail.value,
        uyeImage: "null",
        hangiBolum: 0
    }).then(function () {
        //Uyeler sayfasına yönlendirir
        document.location.href = '../examples/tables.html';
    })


})