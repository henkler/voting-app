if (Polls.find().count() === 0) {
  Polls.insert({
    title: 'Winner of the Zombie Apocalypse',
    options: [
      { text: 'Cockroaches' },
      { text: 'Zombies' },
      { text: 'Twinkies' },
      { text: 'Ash!' }
    ]
  });

  Polls.insert({
    title: 'Favorite Pet',
    options: [
      { text: 'Dog' },
      { text: 'Cat' },
      { text: 'Mantis Shrimp' }
    ]
  });

  Polls.insert({
    title: 'Yes or No',
    options: [
      { text: 'Yes' },
      { text: 'No' }
    ]
  });
}
