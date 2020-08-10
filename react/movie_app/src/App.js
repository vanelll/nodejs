import React from 'react';
// eslint-disable-next-line
import PropTypes from "prop-types"


function Potato( {name, rating}) {
  return (<div><h1> i like {name}</h1>
    <h4>{rating}/ 5</h4>
    </div>
    );
}

Potato.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {id:1,name: "sushi", rating:1},
  {id:2,name: "sushii", rating:5},
  {id:3,name: "sushiii", rating:5},
  {id:4,name: "sushii", rating:4},
  {id:5,name: "sushi", rating:3},
];

function App() {
  return (
      <div>{foodILike.map(dish=> (
        <Potato
          key={dish.id}
          name={dish.name}
          rating= {dish.rating} />
      ))}
      
      
      </div>
  );
}

export default App;
