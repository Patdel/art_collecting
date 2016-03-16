
Artists = new Mongo.Collection('artists')

if (Meteor.isClient) {

Template.creators.helpers({
  collecting: function() {
    return ("I love this piece!");
  }
});




}

if (Meteor.isServer) {

}
