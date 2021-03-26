import { React, useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
        <Container>
            <h1 id="plant-header">Plants</h1>
            { locations[0] ? <button className="btn btn-create-plant"
                onClick={() => {
                    history.push({ pathname: "/plants/create" })
                }}>+ Add New Plant</button> : "Please Create A Location!" }
            <Row id="plant-row">
                {
                    plants.map(plant => <Col id="plant-col" xs={4}><Plant key={plant.id} plant={plant} /></Col>)
                }
            </Row>
        </Container>
    )
}