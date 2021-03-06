var dogs = [
  {
    name: "Mr. Snugglewumps",
    color: "Brown",
    breed: "St. Bernard",
    description: "A lovable dog with a great personality.",
    price: 25,
    url: "https://s-media-cache-ak0.pinimg.com/564x/1f/9b/8c/1f9b8c21911543f3de379a9a59584da7.jpg"
  },
  {
    name: "Champ",
    color: "Black and white",
    breed: "Border collie",
    description: "Shy but playful little guy!",
    price: 30,
    url: "http://www.pets4homes.co.uk/images/breeds/1/large/41689c8d6fd802cdbd03f7f189acb863.jpg"
  },
  {
    name: "Snowball",
    color: "White",
    breed: "Great Pyrenees",
    description: "A big ball of floof and fun!",
    price: 30,
    url: "https://www.greenfieldpuppies.com/wp-content/plugins/gfp/images/big/pup_x_1366379825_0.jpg"
  },
  {
    name: "Rex",
    color: "Blonde",
    breed: "Alaskan Malamute",
    description: "Fun and energetic",
    price: 60,
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Alaskan_Malamute.jpg"
  },
  {
    name: "Max",
    color: "Black",
    breed: "Corgi",
    description: "Happy and easy going",
    price: 150,
    url: "https://pbs.twimg.com/profile_images/378800000674268962/06ce58cab26c3a0daf80cf57e5acb29b_400x400.jpeg"
  },
  {
    name: "Lucy",
    color: "White",
    breed: "Australian Shepard",
    description: "Shy, but loveable",
    price: 120,
    url: "http://cdn2-www.dogtime.com/assets/uploads/gallery/austalian-shepherd-dog-breed-pictures/10-threequarters.jpg"
  },
  {
  name: "Abby",
  color: "White",
  breed: "Miniature Poodle",
  description: "Full of energy, smart, easy to train and loves to snuggle.",
  price: 80,
  url: "http://onlydogbreeds.com/images/puppiesLrg/poodle_toy_puppy.jpg",
},
{
  name: "Bruce",
  color: "Brown",
  breed: "Bulldog",
  description: "Playful, likes to sleep a lot and is just learning how to climb the stairs!",
  price: 50,
  url: "http://cdn.earthporm.com/wp-content/uploads/2015/05/bulldog-puppy-cute-dog-photography-37__605.jpg",
},
{
  name: "Harley",
  color: "White and Gray",
  breed: "Husky",
  description: "Curious, growing quickly and loves to wrestle.",
  price: 45,
  url: "https://s-media-cache-ak0.pinimg.com/564x/86/20/5d/86205db02c7f042eeecd363e6507fb6d.jpg",
}
];

// Input: One dog
// Output: DOM has one new dog added to it
function appendDog(dog) {
  var dogTile = document.createElement('div');
  dogTile.className = "tile";
  dogTile.innerHTML = "<img src='" + dog.url + "' class='dog-tile'>";
  dogTile.innerHTML += "<p>Name: " + dog.name + "</p>";
  dogTile.innerHTML += "<p>Color: " + dog.color + "</p>";
  dogTile.innerHTML += "<p>Breed: " + dog.breed + "</p>";
  dogTile.innerHTML += "<p>Description: " + dog.description + "</p>";
  dogTile.innerHTML += "<p>Price: $" + dog.price + "</p>";

  document.querySelector(".main-content").appendChild(dogTile);
}

for (var i = 0; i < dogs.length; i++) {
  appendDog(dogs[i]);
}
