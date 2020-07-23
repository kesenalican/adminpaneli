const addNewBolumButton = document.getElementsByName("newBolumButton")[0];


addNewBolumButton.addEventListener("click",(e) => {
    e.preventDefault();

    document.location.href = '../examples/bolum_olustur.html';

})

