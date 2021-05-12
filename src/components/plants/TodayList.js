import { React, useContext, useEffect } from "react";
import { TodayCard } from "./TodayCard";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";
import { Col, Container, Row } from "react-bootstrap";

export const TodayList = () => {
    const { plants, getTodaysPlants } = useContext(PlantContext)

    useEffect(() => {
        getTodaysPlants()
    }, [])

    return (
        <Container>
            <h2 id="today-header">Needs Watering</h2>
                <Row id="plant-row">
                    {
                        plants.map(plant => <Col id="plant-col" xs={4} key={plant.id}><TodayCard plant={plant} /></Col>)
                    }
                </Row>
        </Container>

    )
}