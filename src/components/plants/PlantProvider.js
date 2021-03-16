import React, { useState } from 'react';

export const PlantContext = React.createContext()

export const PlantProvider = (props) => {
    const [ plants, setPlants ] = useState([])

    const getPlants = () => {
        return fetch("http://localhost:8000/plants")
            .then(res => res.json())
            .then(setPlants)
    }

    return (
        <PlantContext.Provider value={{
            plants, setPlants, getPlants
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}