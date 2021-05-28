import React from 'react'
import Name from "./Name"
const BabyNamesList = ({ data, filter, favourites, addFavourite }) => {
    const input = filter.toString().toLowerCase();
  
    const names = data.filter((person, i) => {
        return (
          favourites.indexOf(person.id) === -1 &&!person.name.toLowerCase().indexOf(input)
        );
      })
      .map((person, i) => {
        return (
          <Name
            id={person.id}
            key={i}
            info={person}
            handleFavourite={(id) => addFavourite(id)}
          />
        );
      });
    return <ul>{names}</ul>;
  }

export default BabyNamesList



