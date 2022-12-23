import React, { createContext, useEffect, useState } from 'react'

const FavouritesContext = createContext({
    favourites: [],
    // totalFavourites: 0,
    addFavourite: (newFavouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {},
});

const URL_FAVOURITES = 'http://localhost:3002/favourites'

export const FavouritesContextProvider = (props) => {
    const [userFavourites, setUserFavourites] = useState([]);

    const addFavouriteHandler = (newFavouriteMeetup) => {
        // setUserFavourites((prevUserFavourites) => {
        //     return {...prevUserFavourites, newFavouriteMeetup}
        // }
        setUserFavourites([
            ...userFavourites, newFavouriteMeetup
        ])
            // return prevUserFavourites.concat(newFavouriteMeetup);
    }

    const removeFavouriteHandler = (meetupId) => {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
        })
    }

    const itemIsFavouriteHandler = (meetupId) => {
        return userFavourites.some((meetup) => meetup.id === meetupId)
    }

    const context = {
        favourites: userFavourites,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
    }

    useEffect(() => {
        fetch(URL_FAVOURITES)
        .then(response => response.json())
        .then(data => {
            setUserFavourites(data)
        })
    }, []);

    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    )
}

export default FavouritesContext;