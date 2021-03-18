import React, { useState } from 'react';

export const PlantContext = React.createContext()

export const PlantProvider = (props) => {
    const [ plants, setPlants ] = useState([])

    const getPlants = () => {
        return fetch("http://localhost:8000/plants", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("terrace_token")}`,
            }
        })
            .then(response => response.json())
            .then(setPlants)
    }

    const createPlant = (plant) => {
        return fetch("http://localhost:8000/plants", {
            method: "POST",
            headers:{
                Authorization: `Token ${localStorage.getItem("terrace_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant)
        })
            .then(getPlants)
    } 

    return (
        <PlantContext.Provider value={{
            plants, setPlants, getPlants, createPlant
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}