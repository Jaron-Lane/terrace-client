import { React, useContext, useEffect } from "react";
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
        <div style={{ marginTop: "2rem" }}>
            <button className="btn btn-add-location"
                onClick={() => {
                    history.push({ pathname: "/locations/create" })
                }}>Add New Location</button>
            <div className="locations">
                {
                    locations.map(location => <Location key={location.id} location={location} />)
                }
            </div>
        </div>
    )
}