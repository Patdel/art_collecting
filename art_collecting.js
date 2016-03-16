
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
  collecting: function() {
    return ("I love this piece!");
  },
  listOfArtists: function() {
    return Artists.find();
  }
});




}

if (Meteor.isServer) {

}
