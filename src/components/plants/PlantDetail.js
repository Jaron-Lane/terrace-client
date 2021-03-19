import { React, useContext, useEffect, useState } from "react";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const PlantDetails = (props) => {
    const { getPlantById } = useContext(PlantContext)

    const [ plant, setPlant ] = useState({ location: {} })

    useEffect(() => {
        const plantId = parseInt(props.match.params.plantId)
        getPlantById(plantId)
            .then(setPlant)
    }, [])

    return (
        <section className="plant">
            <h3 className="plant__name">{ plant.nick_name }</h3>
            <small className="plant__title">{ plant.title }</small>
            <div className="plant__location">Location: { plant.location.name }</div>
            <div className="plant__lighting">{ plant.location.lighting }</div>
            <div className="plant__about">About: { plant.about }</div>

            <button>Edit</button>

            <button>Delete</button>
        </section>
    )
}