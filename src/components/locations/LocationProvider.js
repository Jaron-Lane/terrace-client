import React, { useState } from 'react';

export const LocationContext = React.createContext()

export const LocationProvider = (props) => {
    const [ locations, setLocations ] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8000/locations", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("terrace_token")}`
            }
        })
            .then(response => response.json())
            .then(setLocations)
    }

    const createLocations = (location) => {
        return fetch("http://localhost:8000/locations", {
            method: "POST",
            headers:{
                Authorization: `Token ${localStorage.getItem("terrace_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    return (
        <LocationContext.Provider value={{
            locations, setLocations, getLocations, createLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}