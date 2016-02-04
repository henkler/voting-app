Header = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      user: Meteor.user(),
    }
  },

  renderNavbarLinks: function() {
    var homePath = FlowRouter.path('home');
    var allPollsPath = FlowRouter.path('pollList');

    if(this.data.user) {
      var myPollsPath = FlowRouter.path('pollListMine');
      var newPollPath = FlowRouter.path('pollNew');

      return (
        <ul className="nav navbar-nav">
          <li><a href={homePath}>Home</a></li>
          <li><a href={allPollsPath}>All Polls</a></li>
          <li><a href={myPollsPath}>My Polls</a></li>
          <li><a href={newPollPath}>New Poll</a></li>
        </ul>
      );
    }
    else {
      return (
        <ul className="nav navbar-nav">
          <li><a href={homePath}>Home</a></li>
          <li><a href={allPollsPath}>All Polls</a></li>
        </ul>
      )
    }
  },

  render: function() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Voting App</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          {this.renderNavbarLinks()}

          <ul className="nav navbar-nav navbar-right">
            <li role="separator" className="divider"></li>
            <li><p className="navbar-text"><AccountsUIWrapper /></p></li>
          </ul>
        </div>
      </nav>
    );
  }
});
