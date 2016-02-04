App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.content}
        </div>
      </div>
    );
  }
});
