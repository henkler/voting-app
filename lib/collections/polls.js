Polls = new Mongo.Collection("polls");

Polls.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Polls.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let PollsSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Poll title",
    defaultValue: "Untitled Poll"
  },
  "authorID": {
    type: String,
    label: "The ID of the author of this poll",
    optional: true
  },
  "options": {
    type: [ String ],
    label: "Options for this poll",
    optional: true
  },
  "createdAt": {
    type: String,
    label: "The date this poll was created",
    autoValue() {
      return (new Date()).toISOString();
    }
  }
});

Polls.attachSchema(PollsSchema);

Meteor.methods({
  newPoll(poll) {
    return Polls.insert(poll);
  },

  updatePoll(poll) {
    Polls.update(poll._id, {$set: poll});
  }
});
