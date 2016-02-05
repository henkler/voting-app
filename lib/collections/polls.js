Polls = new Mongo.Collection("polls");

let VoteSchema = new SimpleSchema({
  "_id": {
    type: String,
    defaultValue: Random.id()
  },
  "optionID": {
    type: String
  },
  "ipAddress": {
    type: String,
    label: "IP Address of the voter"
  },
  "userID": {
    type: String,
    optional: true
  },
  "createdAt": {
    type: String,
    label: "The date this vote was cast",
    autoValue() {
      return (new Date()).toISOString();
    }
  }
});

let OptionSchema = new SimpleSchema({
  "_id": {
    type: String,
    defaultValue: Random.id()
  },
  "text": {
    type: String
  },
  "numVotes": {
    type: Number,
    label: "The number of votes for this option",
    defaultValue: 0
  },
  "createdAt": {
    type: String,
    label: "The date this option was created",
    autoValue() {
      return (new Date()).toISOString();
    }
  }
});

let PollSchema = new SimpleSchema({
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
    type: [ OptionSchema ],
    label: "Options for this poll",
    defaultValue: []
  },
  "votes": {
    type: [ VoteSchema ],
    defaultValue: []
  },
  "createdAt": {
    type: String,
    label: "The date this poll was created",
    autoValue() {
      return (new Date()).toISOString();
    }
  }
});

Polls.attachSchema(PollSchema);
