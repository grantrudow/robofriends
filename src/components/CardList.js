import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            { 
                robots.map((user, i) => {
                    //have to include key prop so that javascript knows each one is unique
                    return (
                        <Card 
                        key={i} 
                        id={ robots[i].id } 
                        name={ robots[i].name }
                        email={ robots[i].email }
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;