
Artists = new Mongo.Collection('artists');

var artist = [
  {
    name: "Isa Genzken",
    mediums: ["painting", "installation"] ,
    location: "Berlin, Germany",
    work: [{title: "Angel",
           price: 30000,
           year: "2004",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "angelisagenzken.jpg"
  }
];

if (Meteor.isClient) {

Template.creators.helpers({
  listOfArtists: function() {
    return Artists.find();
  },
});

Template.creators.events({
  'click .thumbnail': function() {
    var artistId = this._id;
    console.log(artistId);
  }
});




}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Artists.find().count() === 0) {
      Artists.insert(
        {name: "Isa Genzken",
    mediums: ["painting", "installation"] ,
    location: "Berlin, Germany",
    work: [{title: "Angel",
           price: 30000,
           year: "2004",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "angelisagenzken.jpg"},

      {name: "Chantal Akerman",
    mediums: ["video", "film"] ,
    location: "New York City, USA",
    work: [{title: "Nightfall on Shangai",
           price: 8000,
           year: "2007",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "nightfallonshangai.jpg"},

    {name: "Judith Bernstein",
    mediums: ["painting", "drawing"] ,
    location: "New York City, USA",
    work: [{title: "Five Panel Vertical",
           price: 25000,
           year: "1973",
           medium: "mixed media"}],
    seller: "Mary Boone Gallery",
    picture: "fivepanelvertical.jpg"},

    {name: "Maria Nordman",
    mediums: ["sculpture", "film", "drawing"] ,
    location: "Berlin, Germany",
    work: [{title: "Ribes Nigrum",
           price: 8500,
           year: "1991",
           medium: "pencil and ink on paper"}],
    seller: "Marian Goodman Gallery",
    picture: "ribesnigrum.jpg"},

    {name: "Subodh Gupta",
    mediums: ["sculpture", "installation"] ,
    location: "New Delhi, India",
    work: [{title: "Touch, Trace, Taste, Truth",
           price: 95000,
           year: "2015",
           medium: "Steel"}],
    seller: "Hauser & Wirth",
    picture: "touchtrace.jpg"},

    {name: "Anna Maria Maiolino",
    mediums: ["sculpture", "photography"] ,
    location: "Sao Paulo, Brazil",
    work: [{title: "Little Snakes No 4",
           price: 3500,
           year: "1996",
           medium: "molded plaster"}],
    seller: "Hauser & Wirth",
    picture: "littlesnakes.jpg"}

    ); // insert function
    } //if statement
  }); //startup function
} // if Server






