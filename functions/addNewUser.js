const userName = document.getElementById("userName");
const userSurname = document.getElementById("userSurname");
const userEmail = document.getElementById("userEmail");
const userimg = document.getElementById("userImage");
const addNewUserButton = document.getElementById("addUserButton");


addNewUserButton.addEventListener("click",(e) => {
    e.preventDefault();
    
    // Veritabanıına kullanıcı ekleme
    database.ref("/uyeler/" + userEmail.value.replace("."," ")).set({
        uyeAdi: userName.value,
        uyeSoyadi: userSurname.value,
        uyeEmaili : userEmail.value,
        uyeImage : "null",
        uyeBolum : 0
    })

    //Uyeler sayfasına yönlendirir
    document.location.href = '../examples/tables.html';
})