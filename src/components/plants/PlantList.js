import { React, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Plant from "./Plant";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const PlantList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const history = useHistory()

    useEffect(() => {
        getPlants()
    }, [])

    return (
        <div style={{ marginTop: "2rem" }}>
            <button className="btn btn-create-plant"
                onClick={() => {
                    history.push({ pathname: "/plants/create" })
                }}>Add New Plant</button>
            <div className="plants">
                {
                    plants.map(plant => <Plant key={plant.id} plant={plant} />)
                }
            </div>
        </div>
    )
}