import { React, useContext, useEffect, useState } from "react";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const PlantDetails = (props) => {
    const { getPlantById } = useContext(PlantContext)

    const [ plant, setPlant ] = useState({})

    useEffect(() => {
        const plantId = parseInt(props.match.params.plantId)
        getPlantById(plantId)
            .then(setPlant)
    }, [])

    return (
        <section className="plant">
            <h4 className="plant__name">{ plant.nick_name }</h4>
            <small className="plant__title">{ plant.title }</small>
            <div className="plant__location">Location: { plant.location?.name }</div>
            <div className="plant__lighting">Lighting: { plant.location?.lighting }</div>
            <div className="plant__watering">Water every { plant.watering_frequency } days</div>
            <div className="plant__about">About: { plant.about }</div>

            <button>Edit</button>

            <button>Delete</button>
        </section>
    )
}