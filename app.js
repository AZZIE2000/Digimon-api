function Collection(name, pic, level) {
  this.name = name;
  this.pic = pic;
  this.level = level;
}
let pokies = [];
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((res) => res.json())
  .then((data) => {
    while (pokies.length < 102) {
      let x = 0;
      x = Math.floor(Math.random() * 208) + 1;
      let newPoki = new Collection(data[x].name, data[x].img, data[x].level);
      pokies.push(newPoki);
    }
    console.log(pokies);
    console.log(data);
    pokies.map(render);
  });
console.log(pokies);

let myDiv = document.getElementById("cardsPlace");

function render(pokies) {
  // create div container and set class name

  let divCol = document.createElement("div");
  divCol.className = "col-lg-2 ";
  myDiv.append(divCol);

  // create div container to carry card-title, card-image, card-body, and card-text
  let card = document.createElement("div");
  card.className = "card";
  divCol.append(card);

  let imgCard = document.createElement("img");
  imgCard.className = "card-img-top w-100";
  imgCard.style.width = "50px";
  imgCard.src = pokies.pic;
  card.append(imgCard);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.append(cardBody);

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = pokies.name;
  cardBody.append(cardTitle);

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.setAttribute("style", "white-space: pre;");
  cardText.textContent = pokies.level;
  cardBody.append(cardText);
}
