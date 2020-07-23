const database = firebase.database().ref("/uyeler/");

const tbody = document.getElementsByName("ssg")[0];

// URL'de gönderilen email değişkenini bulur.
const queryString = window.location.search;
var uyeEmaili = queryString.substring(7);


database.on("value", function (snapshot) { 
    snapshot.forEach(function (childSnapshot) { 

        if (childSnapshot.val()["uyeEmaili"] == uyeEmaili) {
            
            // Diğer üye bilgilerini email yardımı ile bulur.
            uyeAdi = childSnapshot.val()["uyeAdi"];
            uyeSoyadi = childSnapshot.val()["uyeSoyadi"];
            uyeBolum = childSnapshot.val()["uyeBolum"];

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


