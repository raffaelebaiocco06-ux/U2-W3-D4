//  URL
const urldettaglio = `https://api.pexels.com/v1/photos/${photoid}`;

const dettaglio = function () {
  fetch(urldettaglio, {
    headers: {
      Authorization: "1BDDNudRFfFzRVGs6PRkyTa7CquV02OGxdl7CDLciy51yynZfVnnuh5m",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore nella response");
      }
    })
    .then((details) => {
      console.log("dettagli arrivati ", details);
      const row = document.getElementById("event-row");

      row.innerHTML = `
        <div class="col-md-8 mx-auto">
          <div class="card mb-4 shadow-sm">
            <img src="${details.src.large}" class="img-fluid rounded" />
            <div class="card-body">
              <h5 class="card-title">Fotografo: ${details.photographer}</h5>
              <p class="card-text">
                Visita il profilo dell'artista: 
                <a href="${details.photographer_url}" target="_blank">${details.photographer_url}</a>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <a href="index.html" class="btn btn-secondary">Torna Indietro</a>
                <small class="text-muted">ID: ${details.id}</small>
              </div>
            </div>
          </div>
        </div>`;
      document.body.style.backgroundColor = details.avg_color;
    })
    .catch((err) => {
      console.log("errore " + err);
    });
};

dettaglio();
