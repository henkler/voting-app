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

  getRandomColor: function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },

  componentDidMount: function() {
    this.twitterButtonScriptCode();
  },

  componentDidUpdate: function() {
    this.showExistingVote();
  },

  twitterButtonScriptCode: function() {
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  },

  render() {
    if (this.data.isLoading) { return <div />; }

    var editPath = FlowRouter.path('pollEdit', {_id: this.props._id });

    var chartData = this.data.poll.options.map((option) => {
      return {
        value: option.numVotes,
        label: option.text,
        color: this.getRandomColor()
      }
    });

    return (
      <div>
        <div className="row text-center">
          <div className="col-xs-12 col-md-6">
            <h2>{this.data.poll.title}</h2>
            <hr />
            <div className="btn-group-vertical" role="group">
              {this.renderPollOptions()}
            </div>
            <hr />
            <div>
              <a href="https://twitter.com/share" className="twitter-share-button" data-size="large">Tweet</a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <DoughnutChart data={chartData} width="400" height="400" redraw />
          </div>
        </div>
      </div>
    );
  }
});
