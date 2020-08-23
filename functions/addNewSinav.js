const sinavAdiInput = document.getElementById("sinavNamef");
const sinavEklebutton = document.getElementById("sinavEklebutton");

const queryString = window.location.search;
var bolumId = queryString.split("?")[1].substring(8)




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

var sinavId = randomizeInteger(100000, 9999999);



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
sinavEklebutton.addEventListener("click", (e) => {
  e.preventDefault();

  db.collection("bolumler").doc(bolumId).collection("sinavlar").doc(String(sinavId)).set({


    sinavAdi: sinavAdiInput.value,
  }).then(function () {
    document.location.href = '../examples/map.html';

  })


})







