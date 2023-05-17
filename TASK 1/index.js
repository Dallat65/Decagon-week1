const charImg = [
  "images/Luke skywalker.jpeg",
  "images/C-3PO.jpeg",
  "images/R2-D2.jpeg",
  "images/Dorth Vader.jpeg",
  "images/lela organa.jpeg",
  "images/Owen Lars.jpeg",
  "images/Beru Whiteson lars.jpeg",
  "images/r5-d4.jpeg",
  "images/biggs Darklighter.jpeg",
  "images/Obi-Wan-Kenobi.jpeg",
];

fetch("https://swapi.dev/api/people")
  .then((res) => res.json())
  .then((data) => {
    let characters = data.results;
    let str="";

    for (let character of characters){ ;
        str+=`<h1>${character.name}</h1>
        <img src="${charImg[0]}">
        <h2>${character.gender}</h2>
        <h3>${character.height}</h3>`
        
    document.getElementById("star-name").innerHTML=str
    }
});