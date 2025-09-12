const searchInput = document.getElementById('searchInput');
let showData = document.getElementById('showData');


let API_KEY = "pub_b4705b6f98454eaaa56b5f650e1b9d04";





const searchNews = () => {
  let API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${searchInput.value}`;

showData.innerHTML = `
  <div class="col-12 d-flex justify-content-center align-items-center" style="min-height:300px;">
    <div class="spinner-border text-success" role="status" style="width:3rem; height:3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;



  fetch(API_URL)
    .then((res) => res.json())
    .then((newsData) => {
        console.log(newsData)
      console.log(newsData.results
      );
showData.innerHTML=""
      newsData.results.slice(0,9).forEach(articles => {
        showData.innerHTML +=` <div class="card" style="width: 18rem;">
  <img src="${articles.image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${articles.title}</h5>
    <p class="card-text">${articles.description}</p>
    <a target="_blank" href="${articles.link}" class="btn btn-primary">Read More</a>
  </div>`
      });
    })
    .catch((err) => console.log("Error:", err));
};

function getNews(){
    let API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=karachi`;

showData.innerHTML = `
  <div class="col-12 d-flex justify-content-center align-items-center" style="min-height:300px;">
    <div class="spinner-border text-success" role="status" style="width:3rem; height:3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;



  fetch(API_URL)
    .then((res) => res.json())
    .then((newsData) => {
        console.log(newsData)
      console.log(newsData.results
      );
showData.innerHTML=""
      newsData.results.slice(0,9).forEach(articles => {
        showData.innerHTML +=` <div class="card" style="width: 18rem;">
  <img src="${articles.image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${articles.title}</h5>
    <p class="card-text">${articles.description}</p>
    <a target="_blank" href="${articles.link}" class="btn btn-primary">Read More</a>
  </div>`
      });
    })
    .catch((err) => console.log("Error:", err));
}

function categories(category ){


      let API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${category}`;

showData.innerHTML = `
  <div class="col-12 d-flex justify-content-center align-items-center" style="min-height:300px;">
    <div class="spinner-border text-success" role="status" style="width:3rem; height:3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;




  fetch(API_URL)
    .then((res) => res.json())
    .then((newsData) => {
        console.log(newsData)
      console.log(newsData.results
      );
showData.innerHTML=""
      newsData.results.slice(0,9).forEach(articles => {
        showData.innerHTML +=` <div class="card" style="width: 18rem;">
  <img src="${articles.image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${articles.title}</h5>
    <p class="card-text">${articles.description}</p>
    <a target="_blank" href="${articles.link}" class="btn btn-primary">Read More</a>
  </div>`
      });
    })
    .catch((err) => console.log("Error:", err));
}