import React, { useState } from 'react';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  votes: number;
}

const INITIAL_RESTAURANTS: Restaurant[] = [
  { id: 1, name: 'Pizza Palace', cuisine: 'Italian', votes: 0 },
  { id: 2, name: 'Sushi Zen', cuisine: 'Japanese', votes: 0 },
  { id: 3, name: 'Burger Bliss', cuisine: 'American', votes: 0 },
];

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(INITIAL_RESTAURANTS);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (id: number) => {
    setRestaurants(prev =>
      prev.map(r => (r.id === id ? { ...r, votes: r.votes + 1 } : r))
    );
    setHasVoted(true);
  };

  return (
    <div className="container">
      <h1>Vote for Your Favorite Restaurant!</h1>
      <p>{hasVoted ? "Thank you for voting!" : "Choose one of the following restaurants:"}</p>
      
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-card">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
            <div className="vote-count">Votes: {restaurant.votes}</div>
            {!hasVoted && (
              <button onClick={() => handleVote(restaurant.id)}>Vote</button>
            )}
          </div>
        ))}
      </div>
      
      {hasVoted && (
        <button className="reset-btn" onClick={() => setHasVoted(false)}>Vote Again</button>
      )}
    </div>
  );
};

export default App;
