
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
  'click .thumbnail': function(event) {
    var artistId = this._id;
    console.log(artistId);
    // $(event.target).addClass("thin-border");
  },
  'mouseover .thumbnail': function(event) {
    // $(event.target).addClass("thin-border");
    $(event.target).addClass("thin-border");
  },
  'mouseout .thumbnail': function(event) {
    $(event.target).removeClass("thin-border");
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
    picture: "angelisagenzken.jpg"});

      Artists.insert(
        {name: "Chantal Akerman",
    mediums: ["video", "film"] ,
    location: "New York City, USA",
    work: [{title: "Nightfall on Shangai",
           price: 8000,
           year: "2007",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "nightfallonshangai.jpg"}
        );

      Artists.insert(
        {name: "Judith Bernstein",
    mediums: ["painting", "drawing"] ,
    location: "New York City, USA",
    work: [{title: "Five Panel Vertical",
           price: 25000,
           year: "1973",
           medium: "mixed media"}],
    seller: "Mary Boone Gallery",
    picture: "fivepanelvertical.jpg"}
        );

      Artists.insert(
        {name: "Maria Nordman",
    mediums: ["sculpture", "film", "drawing"] ,
    location: "Berlin, Germany",
    work: [{title: "Ribes Nigrum",
           price: 8500,
           year: "1991",
           medium: "pencil and ink on paper"}],
    seller: "Marian Goodman Gallery",
    picture: "ribesnigrum.jpg"}
        );


    Artists.insert(
      {name: "Subodh Gupta",
    mediums: ["sculpture", "installation"] ,
    location: "New Delhi, India",
    work: [{title: "Touch, Trace, Taste, Truth",
           price: 95000,
           year: "2015",
           medium: "Steel"}],
    seller: "Hauser & Wirth",
    picture: "touchtrace.jpeg"}
      );


    Artists.insert(
      {name: "Anna Maria Maiolino",
    mediums: ["sculpture", "photography"] ,
    location: "Sao Paulo, Brazil",
    work: [{title: "Little Snakes No 4",
           price: 3500,
           year: "1996",
           medium: "molded plaster"}],
    seller: "Hauser & Wirth",
    picture: "littlesnakes.jpg"}
      );
    } //if statement
  }); //startup function
} // if Server










