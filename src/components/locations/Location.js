import { React, useContext } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { LocationContext } from "./LocationProvider";
import "./Locations.css";

export const Location = ({ location }) => { 
    const history = useHistory()
    const { deleteLocation } = useContext(LocationContext)

    const confirmDelete = () => {
        const d = window.confirm("Are you sure?")
        if(d === true) {
            deleteLocation(location.id).then(() => { history.push("/locations") })
        }
    }

    return ( 
        <Card id="outer-location-card">
            <Card.Body id="location-card">
                <Card.Title>
                    { location.name }
                </Card.Title>
                <Card.Subtitle>
                    { location.lighting }
                </Card.Subtitle>
                <div id="location-button-cont">
                    <button onClick={() => {
                        history.push(`/locations/edit/${location.id}`)
                    }}>
                        Edit
                    </button>
                    <button onClick={() => { confirmDelete() }}>
                        Delete
                    </button>
                </div>
            </Card.Body>
        </Card>
    )
}