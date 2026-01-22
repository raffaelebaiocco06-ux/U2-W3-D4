//fetsch con autorizzazione
//api key pexel
//1BDDNudRFfFzRVGs6PRkyTa7CquV02OGxdl7CDLciy51yynZfVnnuh5m

const url = "https://api.pexels.com/v1/search?query=kittens";
const url2 = "https://api.pexels.com/v1/search?query=tiger";
const cardimg = document.querySelectorAll(".card img");
const getevents = function (app) {
  fetch(app, {
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
      const data = array.photos;
      console.log("array data ", data);

      cardimg.forEach((immagine, conta) => {
        immagine.src = data[conta].src.original;
      });
    })
    .catch((error) => {
      console.log("Errore ", error);
    });
};

// primo bottone
const btnload = document.getElementById("Load");
btnload.addEventListener("click", function () {
  getevents(url);
});
//secondo bottone
const secondbtnload = document.getElementById("secondload");
secondbtnload.addEventListener("click", function () {
  getevents(url2);
});

//hide
const btnhide = document.querySelectorAll(".HIDE");
btnhide.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".col-md-4").classList.add("d-none");
  });
});
