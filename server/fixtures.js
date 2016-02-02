if (Polls.find().count() === 0) {
  Polls.insert({
    title: 'Winner of the Zombie Apocalypse',
    createdAt: new Date()
  });

  Polls.insert({
    title: 'Favorite Pet',
    createdAt: new Date()
  });

  Polls.insert({
    title: 'Yes or No',
    createdAt: new Date()
  });
}
