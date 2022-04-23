import React, { useState} from 'react';
import "./Tinder.css";
import TinderCard from "react-tinder-card";

function Tinder() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://images.app.goo.gl/eZhpH5E5nJ3sEE1k8"
        },
        {
            name: 'Angelina Jolie',
            url: "https://images.app.goo.gl/Y76o81WDHaFrF6Um9"
        },
        {
            name: 'Jeff Bezos',
            url: "https://images.app.goo.gl/j57hJcA6NdjN3p6AA"
        },
        {
            name: 'Selena Gomez',
            url: "https://images.app.goo.gl/eorHYHReMC6NPooc9"
        },
        {
            name: 'Neymar Junior',
            url: "https://images.app.goo.gl/jv9d85sEo2i2ps1G9"
        },
        {
            name: 'Bill Gates',
            url: "https://images.app.goo.gl/7Vu4cfPPV1EYkkDD6"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {
                people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                            <div style={{ backgroundImage: 'url($(person.url))' }} className='card'>
                                <h3>{person.name}</h3>
                            </div>

                    </TinderCard>
                ))
            }
        </div>
        
    </div>
  )
}

export default Tinder