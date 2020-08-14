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

 
const tbody = document.getElementsByName("ssg")[0];

// URL'de gönderilen email değişkenini bulur.
const queryString = window.location.search;
var uyeEmaili = queryString.substring(7);
 

db.collection("uyeler").get().then((snapshot) => {
    snapshot.forEach(function (childSnapshot) { 

        if (childSnapshot.data()["email"] == uyeEmaili) {
            
            // Diğer üye bilgilerini email yardımı ile bulur.
            uyeAdi = childSnapshot.data()["isim"];
            uyeSoyadi = childSnapshot.data()["isim"];
            uyeBolum = childSnapshot.data()["hangiBolum"];

            // Üye detay kısmının html'ini oluşturur.
            let tr = document.createElement("tr");

            let td_imageName = document.createElement("td");
            td_imageName.innerText = uyeAdi + " " + uyeSoyadi;

            let td_Email = document.createElement("td");
            td_Email.innerText = uyeEmaili;

            let td_Bolum = document.createElement("td");
            td_Bolum.innerText = uyeBolum;

            let td_deleteUserButton = document.createElement("td");
            td_deleteUserButton.id = "deleteUser";
            td_deleteUserButton.className = "btn btn-primary btn-block";
            td_deleteUserButton.innerText = "Üyeyi Sil";


            tr.appendChild(td_imageName);
            tr.appendChild(td_Email);
            tr.appendChild(td_Bolum);
            tr.appendChild(td_deleteUserButton);


            //Oluşturual html'i asıl yerine koyar.
            tbody.appendChild(tr);

            // Silme butonunu bulur.
            const deleteButton = document.getElementById("deleteUser");
            

            // Uye silme buton işlemi
            deleteButton.addEventListener("click", (e) => {
                e.preventDefault();
                document.location.href = '../examples/tables.html';
                database.child(uyeEmaili.replace(".", " ")).remove();

            });

         }
     }
    )});


