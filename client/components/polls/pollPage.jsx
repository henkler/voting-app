PollPage = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    _id: React.PropTypes.string.isRequired
  },

  getMeteorData() {
    var handle = Meteor.subscribe('poll', this.props._id);
    var poll = Polls.findOne(this.props._id);

    return {
      isLoading: ! handle.ready(),
      poll: poll
    }
  },

  vote(optionID) {
    Meteor.call("vote", this.props._id, optionID, function(error, result) {
    });
  },

  renderPollOptions: function() {
    if (this.data.isLoading || ! this.data.poll.options ) { return; }

    return this.data.poll.options.map((option, index) => {
      return (
        <button
          key={option._id}
          ref={option._id}
          type="button"
          className={ "btn btn-default vote-button" }
          onClick={this.vote.bind(this, option._id)}
          >{option.text}</button>
      );
    });
  },

  showExistingVote: function() {
    var self = this;
    $(".vote-button").removeClass("active");
    Meteor.call("findVote", this.props._id, function(error, result) {
      if (result && result.optionID) {
        $(self.refs[result.optionID]).addClass("active");
      }
    });
  },

  componentDidUpdate: function() {
    this.showExistingVote();
  },

  render() {
    if (this.data.isLoading) { return <div />; }

    var editPath = FlowRouter.path('pollEdit', {_id: this.props._id });

    return (
      <div>
        <div className="row text-center">
          <div className="col-xs-12 col-md-6">
            <h2>{this.data.poll.title}</h2>
            <div ref="test" className="btn-group-vertical" role="group">
              {this.renderPollOptions()}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <p>Chart placeholder</p>
          </div>
        </div>
      </div>
    );
  }
});
