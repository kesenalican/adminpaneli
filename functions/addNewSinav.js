const sinavAdiInput = document.getElementById("sinavNamef");
const sinavEklebutton = document.getElementById("sinavEklebutton");

const queryString = window.location.search;
var bolumId = queryString.split("?")[1].substring(8)




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

var sinavId = randomizeInteger(100000,9999999);






const database = firebase.database();
sinavEklebutton.addEventListener("click", (e) => {
    e.preventDefault();

    // Veritabanıına kullanıcı ekleme
    database.ref("/bolumler/" + bolumId + "/sinavlar/" + sinavId).set({
        sinavAdi : sinavAdiInput.value})

    
    
    database.ref("/bolumler/" + bolumId).on("value", function (snapshot) {

      x = snapshot.val()["bolumSinavSayisi"]
      
    })

    database.ref("/bolumler/"+ bolumId ).update({bolumSinavSayisi : x+1 }) ;
    document.location.href = '../examples/map.html';  

})




        
   

