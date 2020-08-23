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






var fileElement = document.getElementById("imageFile")
var fileList;

fileElement.onchange = function (event) {
    fileList = fileElement.files;
}

function uploadImage() {
    Swal.fire({
        title: '<strong>LÜTFEN BEKLEYİN</strong>',
        icon: 'info',
        html: 'Görsel yükleniyor...',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
    })


    // PATH'İ AYARLA
    var storageRef = firebase.storage().ref();
    var randomName = randomString(15);
    var bolumImagesRef = storageRef.child('bolumImages/' + randomName);

    var file = fileList[0];

    bolumImagesRef.put(file).then(function (snapshot) {
        location.reload();
    })
}



function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
