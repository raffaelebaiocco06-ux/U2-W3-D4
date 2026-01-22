//fetsch con autorizzazione
//api key pexel
//1BDDNudRFfFzRVGs6PRkyTa7CquV02OGxdl7CDLciy51yynZfVnnuh5m

const url = "https://api.pexels.com/v1/search?query=kittens";
const url2 = "https://api.pexels.com/v1/search?query=tiger";

fetch(url, {
  headers: {
    Authorization: "1BDDNudRFfFzRVGs6PRkyTa7CquV02OGxdl7CDLciy51yynZfVnnuh5m",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("errore");
    }
  })
  .then((array) => {
    console.log("array buono ", array);

    const btnload = document.getElementById("Load");
    const data = array.photos;
    console.log("array data ", data);
    const cardimg = document.querySelectorAll(".card img");
    btnload.addEventListener("click", function () {
      cardimg.forEach((immagine, conta) => {
        immagine.src = data[conta].src.original;
      });
    });
    const secondbtnload = document.getElementById("secondload");
    secondbtnload.addEventListener("click", function () {
      cardimg.forEach((immagine, conta) => {
        immagine.src = data[conta].src.original; //qua non va
      });
    });
  })
  .catch((error) => {
    console.log("Errore ", error);
  });
