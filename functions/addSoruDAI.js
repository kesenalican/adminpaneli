
const queryString = window.location.search;
var sinavId = queryString.split("?")[1].substring(8)
var bolumId = queryString.split("?")[2].substring(8)

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

const soruText = document.getElementById("soruTextDAI");
const trueAnswer = document.getElementById("trueAnswerDAI");
const falseAnswer1 = document.getElementById("falseAnswerDAI1");
const falseAnswer2 = document.getElementById("falseAnswerDAI2");
const soruTipi = "dogruAnlam";

const soruEkleButton = document.getElementById("soruEkleButtonDAI");

function randomizeInteger(min, max) {
    if (max == null) {
        max = (min == null ? Number.MAX_SAFE_INTEGER : min);
        min = 0;
    }

    min = Math.ceil(min);  // inclusive min
    max = Math.floor(max); // exclusive max

    if (min > max - 1) {
        throw new Error("Incorrect arguments.");
    }

    return min + Math.floor((max - min) * Math.random());
}

var soruId = randomizeInteger(100000, 999999)

soruEkleButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Veritabanıına kullanıcı ekleme
    db.doc("/bolumler/%%d/sinavlar/%%y/sorular/%%e".replace("%%d", bolumId).replace("%%y", sinavId).replace("%%e", soruId)).set({
        ingilizceCumle: soruText.value,
        turkceCumle: trueAnswer.value,
        yanlis1: falseAnswer1.value,
        yanlis2: falseAnswer2.value,
        soruTipi: soruTipi
    }).then(function () {
        document.location.href = '../examples/map.html'; 

    })
 
    var index = 0


})