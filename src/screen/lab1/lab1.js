const players = [
    { name: "Messi", goals: 30 },
    undefined,
    { name: "Ronaldo", goals: 28 },
    { name: "Neymar", goals: 22 },
    { goals: 2 },
    { name: "Mbappé", goals: 25 },
  ];
  
  const filterplayers = players.filter(
    (players) => players && players.name && players.goals
  );
  
  console.log(filterplayers);
  
  const playersGoal = players.reduce((maxPlayer, player) =>
    player?.goals > maxPlayer?.goals ? player : maxPlayer
  );
  const playersNameGoal = playersGoal?.name;
  
  console.log(playersNameGoal);
  