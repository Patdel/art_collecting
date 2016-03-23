
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

      {name: "Isa Genzken",
    mediums: ["painting", "installation"] ,
    location: "Berlin, Germany",
    work: [{title: "Angel",
           price: 30000,
           year: "2004",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "angelisagenzken.jpg"},

    {name: "Isa Genzken",
    mediums: ["painting", "installation"] ,
    location: "Berlin, Germany",
    work: [{title: "Angel",
           price: 30000,
           year: "2004",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "angelisagenzken.jpg"},

    {name: "Isa Genzken",
    mediums: ["painting", "installation"] ,
    location: "Berlin, Germany",
    work: [{title: "Angel",
           price: 30000,
           year: "2004",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "angelisagenzken.jpg"},

    {name: "Isa Genzken",
    mediums: ["painting", "installation"] ,
    location: "Berlin, Germany",
    work: [{title: "Angel",
           price: 30000,
           year: "2004",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "angelisagenzken.jpg"},

    {name: "Isa Genzken",
    mediums: ["painting", "installation"] ,
    location: "Berlin, Germany",
    work: [{title: "Angel",
           price: 30000,
           year: "2004",
           medium: "mixed media"}],
    seller: "David Zwirner",
    picture: "angelisagenzken.jpg"},

    ); // insert function
    } //if statement
  }); //startup function
} // if Server






