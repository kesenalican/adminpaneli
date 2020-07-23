const database = firebase.database();
const bolumName = document.getElementById("bolumName");
const addNewUserButton = document.getElementById("createNewBolum");

function randomizeInteger(min, max) {
    if(max == null) {
      max = (min == null ? Number.MAX_SAFE_INTEGER : min);
        min = 0;
  }

  min = Math.ceil(min);  // inclusive min
  max = Math.floor(max); // exclusive max

    if(min > max - 1) {
      throw new Error("Incorrect arguments.");
  }

  return min + Math.floor((max - min) * Math.random());
}



addNewUserButton.addEventListener("click",(e) => {
    e.preventDefault();

    id = randomizeInteger(10000,100000);

    // Veritabanıına yeni bölüm ekleme
    database.ref("/bolumler/" + id).set({
    bolumAdi: bolumName.value,
    bolumIcon : "https://icon-library.com/images/icon-english/icon-english-2.jpg",
    bolumSinavSayisi : 0,
    bolumSinavlari : []
    
    }) 
    
    //Uyeler sayfasına yönlendirir
    document.location.href = '../examples/map.html';
})