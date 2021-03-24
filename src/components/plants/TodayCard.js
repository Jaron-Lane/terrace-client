import { React, useContext } from "react";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const TodayCard = ({ plant }) => {
    const { waterPlants } = useContext(PlantContext)

    return (
    <section className="plant">
        <h3 className="plant__nick_name">{ plant.nick_name }</h3>
        <div className="plant__title">{ plant.location.name }</div>
        <button type="submit"
            onClick={evt => {
                evt.preventDefault()
                waterPlants(plant.id)
                }}>Plant is Watered</button>
    </section>
    )
}
