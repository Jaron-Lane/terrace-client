import { React, useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Location } from "./Location";
import { LocationContext } from "./LocationProvider";
import "./Locations.css"

export const LocationList = () => {
    const history = useHistory()
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <Container>
            <h1 id="location-header">Rooms</h1>
            <button className="btn btn-add-location"
                onClick={() => {
                    history.push({ pathname: "/locations/create" })
                }}>+ Add New Location</button>
            <Row id="location-row">
                {
                    locations.map(location => <Col id="location-col" xs={4} key={location.id}><Location location={location} /></Col>)
                }
            </Row>
        </Container>
    )
}