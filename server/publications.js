Meteor.publish("allPolls", function() {
  return Polls.find();
});

Meteor.publish("myPolls", function(authorID) {
  return Polls.find({authorID: authorID});
})

Meteor.publish("poll", function(id) {
  return Polls.find({_id: id});
});
