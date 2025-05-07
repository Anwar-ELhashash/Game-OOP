// ================== loading ==================
const loading = document.getElementById("loading");
// ================== API Class ==================
class getApi {
  constructor(api) {
    this.api = api;
  }

  async getGames() {
    try {
      loading.classList.remove("d-none");
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "58f314767fmsh3cbbd0bb9181270p1085a2jsnf7eafc979b40",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const api = await fetch(this.api, options);
      const response = await api.json();
      const cards = [];
      for (let i = 0; i < response.length; i++) {
        const htmlCard = `
        <div class="col-12 col-md-4 col-lg-3">
          <div class="card bg-transparent" data-id="${response[i].id}">
            <div class="card-body p-13">
              <div class="image-wrapper">
                <img class="w-100 rounded-top-2" src="${response[i].thumbnail}" alt="thumbnail"/>
              </div>
              <div class="d-flex justify-content-between align-items-center text-white mt-3 mb-2">
                <h3 class="m-0 h6">${response[i].title}</h3>
                <span class="badge bg-primary pt-2 text-capitalize">free</span>
              </div>
              <p class="text-white text-center fs-14 text-opacity-50 m-0">${
                response[i].short_description.length <= 50
                  ? response[i].short_description
                  : response[i].short_description.split("", 40).join("")
              }</p>
            </div>
            <div class="card-footer d-flex justify-content-between gap-1 align-items-center p-13">
              <span class="badge fs-10 bg-secondary bg-opacity-25 text-uppercase">${
                response[i].genre
              }</span>
              <span class="badge fs-10 bg-secondary bg-opacity-25 text-uppercase">${
                response[i].platform
              }</span>
            </div>
          </div>
        </div>
      `;
        cards.push(htmlCard);
        homeRowCards.innerHTML = cards.join("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.classList.add("d-none");
    }
  }

  async getDetails(id) {
    try {
      loading.classList.remove("d-none");
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "58f314767fmsh3cbbd0bb9181270p1085a2jsnf7eafc979b40",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );
      const response = await api.json();
      homeSection.classList.toggle("d-none");
      details.classList.toggle("d-none");
      details.children[0].children[1].innerHTML = `
        <div class="image-wrapper">
            <img class="w-100" src="${response.thumbnail}" alt="thumbnail" />
        </div>
        <div class="details-text">
          <div class="headings mb-3">
            <h2 class="h5 mb-2">Title: ${response.title}</h2>
            <p class="fs-12 mb-2">Category : <span class="badge text-uppercase">${response.genre}</span></p>
            <p class="fs-12 mb-2">Platform : <span class="badge text-uppercase">${response.platform}</span></p>
            <p class="fs-12 mb-2">Status : <span class="badge text-uppercase">${response.status}</span></p>
          </div>
          <p class="description fs-10 lh-lg">${response.description}</p>
          <a  class="btn btn-outline-warning text-capitalize text-white fs-14" target="_blank" href="${response.game_url}">show game</a>
        </div>
      `;
    } catch (error) {
      console.log(error);
    } finally {
      loading.classList.add("d-none");
    }
  }
}

export { getApi };
