
const userName = document.getElementById("userName");
const userSurname = document.getElementById("userSurname");
const userEmail = document.getElementById("userEmail");
const userimg = document.getElementById("userImage");
const addNewUserButton = document.getElementById("addUserButton");

console.log(userName);

const database = firebase.database();
const storage = firebase.storage().ref();

addNewUserButton.addEventListener("click",(e) => {
    e.preventDefault();
    
    // Seçilen img i upload etme
    ref = storage.child(userimg.value.substring(12));
    ref.put(userimg.files[0])


    // Veritabanıına kullanıcı ekleme
    database.ref("/uyeler/" + userName.value).set({
        uyeAdi: userName.value,
        uyeSoyadi: userSurname.value,
        uyeEmaili : userEmail.value,
        uyeImage : "null",
        uyeBolum : 0
    })
})