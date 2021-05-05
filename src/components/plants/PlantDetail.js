import { React, useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { PlantContext } from "./PlantProvider";
import "./Plants.css";

export const PlantDetails = (props) => {
    const history = useHistory();
    const { getPlantById, deletePlant } = useContext(PlantContext)

    const [ plant, setPlant ] = useState({})

    useEffect(() => {
        const plantId = parseInt(props.match.params.plantId)
        getPlantById(plantId)
            .then(setPlant)
    }, [])

    const confirmDelete = () => {
        const d = window.confirm("Are you sure?")
        if(d === true) {
            deletePlant(plant.id).then(() => { history.goBack() })
        }
    }


    return (
        <>
        <div id="plant-detail-flex">
            <Card id="outer-plant-detail" style={{ width: '40em' }}>
                <Card.Body id="plant-card">
                    <Card.Title>{ plant.nick_name }</Card.Title>
                    <Card.Subtitle>{ plant.title }</Card.Subtitle>
                    <Row id="plant-detail-cont">
                        <Col>
                            <Card.Text>Location: { plant.location?.name }</Card.Text>
                            <Card.Text>Lighting: { plant.location?.lighting }</Card.Text>
                            <Card.Text>Water every { plant.watering_frequency } days</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>{ plant.about }</Card.Text>
                        </Col>
                    </Row>
                    <div>
                        <button onClick={event => {
                            event.preventDefault()
                            history.goBack()
                        }}>Back</button>
                        <button onClick={() => { history.push(`/plants/edit/${plant.id}`)}}>Edit</button>

                        <button onClick={() => { confirmDelete() }}>Delete</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}