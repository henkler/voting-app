Meteor.publish("allPolls", function() {
  return Polls.find();
});

Meteor.publish("poll", function(id) {
  return Polls.find({_id: id});
});
