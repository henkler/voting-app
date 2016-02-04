App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="jumbotron">
            <h1>Polls!</h1>
          </div>
          <AccountsUIWrapper />
          {this.props.content}
        </div>
      </div>
    );
  }
});
