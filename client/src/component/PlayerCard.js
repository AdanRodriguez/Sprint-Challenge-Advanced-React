import React from "react";

export default function PlayerCard({player}) {
    return (
        <div>
            <h1 data-testid="player-name">Name: {player.name}</h1>
            <p data-testid="country-name">Country: {player.country}</p>
            <p data-testid="google-searches">Google Searches: {player.searches}</p>
        </div>
    );
};