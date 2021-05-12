import { React, useContext } from "react";
import { Card } from "react-bootstrap";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const TodayCard = ({ plant }) => {
    const { waterPlants } = useContext(PlantContext)

    return (
        <Card id="outer-plant-card" key={plant.id}>
            <Card.Body id="plant-card">
                <Card.Title>{ plant.nick_name }</Card.Title>
                <Card.Subtitle>{ plant.location.name }</Card.Subtitle>
                <button type="submit" id="location-button-cont"
                    onClick={evt => {
                        evt.preventDefault()
                        waterPlants(plant.id)
                        }}>Water Plant</button>
            </Card.Body>
        </Card>
    )
}
