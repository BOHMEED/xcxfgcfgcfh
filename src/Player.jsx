// src/Player.js
import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>Team: {team}</p>
      <p>Nationality: {nationality}</p>
      <p>Jersey Number: {jerseyNumber}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "200px",
    height: "auto",
  },
};

export default Player;
