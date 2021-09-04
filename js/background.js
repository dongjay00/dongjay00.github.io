const images = [
  {
    img: "0",
    movie: "La La Land, 2016",
  },
  {
    img: "1",
    movie: "The Greatest Showman, 2017",
  },
  {
    img: "2",
    movie: "The Avengers: Age of Ultron, 2015",
  },
  {
    img: "3",
    movie: "The Lord of the Rings: The Return of the King, 2003",
  },
  {
    img: "4",
    movie: "Harry Potter and the Order of the Phoenix, 2007",
  },
  {
    img: "5",
    movie: "The Dark Knight, 2008",
  },
  {
    img: "6",
    movie: "Cinderella, 2015",
  },
  {
    img: "7",
    movie: "Kong: Skull Island, 2017",
  },
  {
    img: "8",
    movie: "Man of Steel, 2013",
  },
  {
    img: "9",
    movie: "Star Wars: Episode IV A New Hope, 1977",
  },
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;

body.style.backgroundImage = `url("../img/${chosenImage.img}.jpg")`;

const photoInfo = document.querySelector("#photo-info p");

photoInfo.innerText = chosenImage.movie;
