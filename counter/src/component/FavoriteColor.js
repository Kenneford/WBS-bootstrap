import React, {useState, useEffect} from 'react';

function FavoriteColor(){
    const [favoriteColor, setFavoriteColor] = useState('red')

    useEffect(() => {
        setTimeout(() =>{
            setFavoriteColor(() => 'green')
        }, 2000)
    }, [])
    return(
        <h1>
            My Favorite Color is <span style={{color: '#0ab50a'}}>{favoriteColor}</span> 
        </h1>
    )
}

export default FavoriteColor;