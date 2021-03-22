import { React, useContext, useEffect } from "react";
import { TodayCard } from "./TodayCard";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const TodayList = () => {
    const { plants, getPlants } = useContext(PlantContext)

    useEffect(() => {
        getPlants()
    }, [])

    return (
        <div className="today" style={{ marginTop: "2rem" }}>
            <h2 className="today__header">Needs Watering</h2>
            <div className="today__plants">
                {
                    plants.map(plant => <TodayCard key={plant.id} plant={plant} />)
                }
            </div>
        </div>
    )
}