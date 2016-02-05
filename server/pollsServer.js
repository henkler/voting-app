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

Meteor.methods({
  insertPoll(poll) {
    if (Meteor.userId()) {
      poll.authorID = Meteor.userId();
      return Polls.insert(poll);
    }
  },

  updatePoll(poll) {
    var dbPoll = Polls.findOne(poll._id);
    if (dbPoll && Meteor.userId() === dbPoll.authorID) {
      Polls.update(dbPoll._id, {$set: poll});
    }
  },

  removePoll(pollID) {
    var dbPoll = Polls.findOne(pollID);
    if (dbPoll && Meteor.userId() === dbPoll.authorID) {
      Polls.remove(dbPoll._id);
    }
  },

  // returns the cast vote for a given poll, if it exists.  Null if it does not
  findVote(pollID) {
    var userID = Meteor.userId();
    var ipAddress = this.connection.clientAddress;
    var dbPoll = Polls.findOne(pollID);
    var vote = null;

    if (dbPoll) {
      if (userID) {
        vote = dbPoll.votes.find((vote) => vote.userID === userID )
      }
      else {
        vote = dbPoll.votes.find((vote) => vote.ipAddress === ipAddress )
      }
    }

    return vote;
  },

  // vote for a given option on a poll.  Update existing vote if already voted
  vote(pollID, optionID) {
    var userID = Meteor.userId();
    var dbPoll = Polls.findOne(pollID);

    if (dbPoll) {
      var option = dbPoll.options.find((option) => option._id === optionID );
      var allVotes = dbPoll.votes;
      if (option) {
        // already voted
        var vote = Meteor.call("findVote", pollID) || {};

        vote.optionID = optionID;
        vote.ipAddress = this.connection.clientAddress;
        vote.userID = userID;

        if (vote._id) {
          // update existing vote
          var voteIndex = allVotes.findIndex( (v) => v._id === v._id )
          allVotes[voteIndex] = vote;
        }
        else {
          allVotes.push(vote);
        }

        Polls.update(dbPoll._id, {$set: {votes: allVotes}});

        Meteor.call("recalcVotes", pollID);

        return true;
      }
      else {
        throw new Meteor.Error("not-found", "could not find option by option ID")
      }
    }
    else {
      throw new Meteor.Error("not-found", "could not find poll from given poll ID");
    }
  },

  // recalculate the vote tally for all options in the poll
  recalcVotes(pollID) {
    var dbPoll = Polls.findOne(pollID);

    if (dbPoll) {
      var allOptions = dbPoll.options;
      allOptions.forEach((option) => {
        var votesForOption = dbPoll.votes.filter((vote) => vote.optionID === option._id).length;
        option.numVotes = votesForOption;
      });

      Polls.update(dbPoll._id, {$set: {options: allOptions}});
    }
  }
});
