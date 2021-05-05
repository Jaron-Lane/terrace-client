import { React } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Plants.css";

export default ({ plant }) => (
    // <section className="plant">
    <Card id="outer-plant-card">
        <Card.Body id="plant-card">
            <Card.Title>
                <Link to={`/plants/${plant.id}`}>
                    { plant.nick_name }
                </Link>
            </Card.Title>
            <Card.Subtitle>{ plant.title }</Card.Subtitle>
            <Card.Text>Water every { plant.watering_frequency } days</Card.Text>
        </Card.Body>
    </Card>
)