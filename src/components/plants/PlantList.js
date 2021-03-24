import { React, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "../locations/LocationProvider";
import Plant from "./Plant";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const PlantList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    useEffect(() => {
        getPlants()
        getLocations()
    }, [])

    return (
        <div style={{ marginTop: "2rem" }}>
            { locations[0] ? <button className="btn btn-create-plant"
                onClick={() => {
                    history.push({ pathname: "/plants/create" })
                }}>Add New Plant</button> : "Please Create A Location!" }
            <div className="plants">
                {
                    plants.map(plant => <Plant key={plant.id} plant={plant} />)
                }
            </div>
        </div>
    )
}