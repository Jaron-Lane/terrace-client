import { React, useContext, useEffect } from "react";
import Plant from "./Plant";
import "./Plants.css";
import { PlantContext } from "./PlantProvider";

export const PlantList = () => {
    const { plants, getPlants } = useContext(PlantContext)

    useEffect(() => {
        getPlants()
    }, [])

    return (
        <div style={{ marginTop: "2rem" }}>
            <button>Add New Plant</button>
            <div className="plants">
                {
                    plants.map(plant => <Plant key={plant.id} plant={plant} />)
                }
            </div>
        </div>
    )
}