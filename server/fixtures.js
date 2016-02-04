if (Polls.find().count() === 0) {
  Polls.insert({
    title: 'Winner of the Zombie Apocalypse',
    answers: [
      { text: 'Cockroaches', votes: 0 },
      { text: 'Zombies', votes: 0 },
      { text: 'Twinkies', votes: 0 },
      { text: 'Ash!', votes: 0 }
    ],
    createdAt: new Date()
  });

  Polls.insert({
    title: 'Favorite Pet',
    answers: [
      { text: 'Dog', votes: 0 },
      { text: 'Cat', votes: 0 },
      { text: 'Mantis Shrimp', votes: 0 }
    ],
    createdAt: new Date()
  });

  Polls.insert({
    title: 'Yes or No',
    answers: [
      { text: 'Yes', votes: 0 },
      { text: 'No', votes: 0}
    ],
    createdAt: new Date()
  });
}
