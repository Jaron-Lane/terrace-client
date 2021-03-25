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

    const getTodaysPlants = () => {
        return fetch("http://localhost:8000/plants?todays_plants=true", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("terrace_token")}`,
            }
        })
            .then(response => response.json())
            .then(setPlants)
    }

    const waterPlants = (plantId) => {
        return fetch(`http://localhost:8000/plants/${plantId}/water`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("terrace_token")}`,
                "Content-Type": "application/json",
            }
        })
        .then(getTodaysPlants)
    }

    const getPlantById = (id) => {
        return fetch(`http://localhost:8000/plants/${id}?_expand=location`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("terrace_token")}`,
            }
        })
        .then(res => res.json())
    }

    const createPlant = (plant) => {
        return fetch("http://localhost:8000/plants", {
            method: "POST",
            headers:{
                Authorization: `Token ${localStorage.getItem("terrace_token")}`,
            },
            body: plant
        })
            .then(getPlants)
    } 

    const deletePlant = (plantId) => {
        return fetch(`http://localhost:8000/plants/${plantId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("terrace_token")}`,
            },
        })
            .then(getPlants)
    }

    const updatePlant = (plant) => {
        return fetch(`http://localhost:8000/plants/${plant.id}`, {
            method: "PUT",
            headers:{
                Authorization: `Token ${localStorage.getItem("terrace_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant)
        }).then(getPlants)
    }

    return (
        <PlantContext.Provider value={{
            plants, setPlants, getPlants, 
            createPlant, getPlantById, 
            deletePlant, updatePlant,
            getTodaysPlants, 
            waterPlants
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}