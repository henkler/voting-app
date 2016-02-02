FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(App, {
      content: <PollList />
    });
  }
});

FlowRouter.route('/new-poll', {
  action: function(){
    ReactLayout.render(App, {
      content: <NewPoll />
  });
  }
});
