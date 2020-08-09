import React, { useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css"
import database from "./firebase"

function TinderCards() {
  const [people, setPeople] = useState([]);


  //Piece of code which run based on a condition
  // it replace all life cycles

  useEffect(() => {
      const unsubscribe = 
      database.collection('people').onSnapshot(snapshot => (
        setPeople(snapshot.docs.map(doc => doc.data()))
      ));

      return () => {
          unsubscribe();
      }
    //   this will run once when the component load, and never again
  }, [])

  // Bad
  // const people = [];
  // people.push('sarib', 'faisal')

  // Good and jo bhe people mai hai aur us mai baaki naam bhe daal dai
  // setPeople([...people, 'sarib', 'faisal']);
  return (
    <div>
    
      <div className="tinderCard__cardContainer">
      {people.map((person) => (
        //   Always give keys in react
        // allow react to efficientlty re-render a list
        <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}

export default TinderCards;
