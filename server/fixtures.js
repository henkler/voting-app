if (Polls.find().count() === 0) {
  Polls.insert({
    title: 'Winner of the Zombie Apocalypse',
    options:
      [
          {
              "text" : "Cockroaches",
              "_id" : "NdR2atiJjQdtJE9B4",
              "numVotes" : 2
          },
          {
              "text" : "Zombies",
              "_id" : "nASi2o2hWhhMgYAgW",
              "numVotes" : 2
          },
          {
              "text" : "Twinkies",
              "_id" : "3t55raEzPCocLeepF",
              "numVotes" : 3
          },
          {
              "text" : "Ash!",
              "_id" : "bTQeP5jrpeR3m8TtA",
              "numVotes" : 13
          }
      ]
    ,
    votes: [
      { optionID: "3t55raEzPCocLeepF", ipAddress: "127.0.0.1" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.2" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.3" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.4" },
      { optionID: "nASi2o2hWhhMgYAgW", ipAddress: "127.0.0.5" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.6" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.7" },
      { optionID: "3t55raEzPCocLeepF", ipAddress: "127.0.0.8" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.9" },
      { optionID: "nASi2o2hWhhMgYAgW", ipAddress: "127.0.0.10" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.11" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.12" },
      { optionID: "3t55raEzPCocLeepF", ipAddress: "127.0.0.13" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.14" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.15" },
      { optionID: "nASi2o2hWhhMgYAgW", ipAddress: "127.0.0.16" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.17" },
      { optionID: "bTQeP5jrpeR3m8TtA", ipAddress: "127.0.0.18" },
      { optionID: "NdR2atiJjQdtJE9B4", ipAddress: "127.0.0.19" },
      { optionID: "NdR2atiJjQdtJE9B4", ipAddress: "127.0.0.20" }
    ]
  });
}
