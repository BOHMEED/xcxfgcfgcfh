// src/App.js
import React from "react";
import PlayersList from "./Playerlist";

function App() {
  const players = [
    {
      name: "Lionel Messi",
      team: "Paris Saint-Germain",
      nationality: "Argentina",
      jerseyNumber: 10,
      age: 34,
      imageUrl: "https://example.com/messi.jpg",
    },
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      nationality: "Portugal",
      jerseyNumber: 7,
      age: 36,
      imageUrl: "https://example.com/ronaldo.jpg",
    },
    {
        name: "Mbappe",
        team: "Paris Saint-Germain",
        nationality: "FRANCE",
        jerseyNumber: 7,
        age: 23,
        imageUrl: "https://example.com/messi.jpg",
      },
      {
        name: "Erling Haaland",
        team: "Manchester city",
        nationality: "NORWAY",
        jerseyNumber: 9,
        age: 26,
        imageUrl: "https://example.com/messi.jpg",
      },
      {
        name: "NEYMAR",
        team: "Paris Saint-Germain",
        nationality: "BRAZIL",
        jerseyNumber: 10,
        age: 29,
        imageUrl: "https://example.com/messi.jpg",
      },
      {
        name: "KEVINE DE BRUYNE",
        team: "Manchester city",
        nationality: "BELGIUM",
        jerseyNumber: 17,
        age: 32,
        imageUrl: "https://example.com/messi.jpg",
      },
      {
        name: "Lewandowski",
        team: "FC BARCELONA",
        nationality: "POLAND",
        jerseyNumber: 9,
        age: 34,
        imageUrl: "https://example.com/messi.jpg",
      },
    // Add more players here
  ];
  return (
    <div>
      <h1>FIFA Player Cards</h1>
      <PlayersList players={players} />
    </div>
  );
}

export default App;
