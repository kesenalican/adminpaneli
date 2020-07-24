
const queryString = window.location.search;
var sinavId = queryString.split("?")[1].substring(8)
var bolumId = queryString.split("?")[2].substring(8)

const database = firebase.database();

const soruText = document.getElementById("soruTextTY");
const trueAnswer = document.getElementById("trueAnswerTY");
const falseAnswer1 = document.getElementById("falseAnswerTY1");
const falseAnswer2 = document.getElementById("falseAnswerTY2");
const sorutype = "Turkce Yaz";

const soruEkleButton = document.getElementById("soruEkleButtonTY");

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

var soruId = randomizeInteger(100000,999999)

soruEkleButton.addEventListener("click",(e) => {
    e.preventDefault();
    
    // Veritabanıına kullanıcı ekleme
    database.ref("/bolumler/%%d/sinavlar/%%y/sorular/%%e".replace("%%d",bolumId).replace("%%y",sinavId).replace("%%e",soruId)).set({
        soruText: soruText.value,
        trueAnswer: trueAnswer.value,
        falseAnswer1 : falseAnswer1.value,
        falseAnswer2 : falseAnswer2.value,
        soruType : sorutype
    })

    //Uyeler sayfasına yönlendirir
    document.location.href = '../examples/map.html';
})