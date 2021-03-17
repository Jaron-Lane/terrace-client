import { React, useContext, useEffect } from "react";
import { Location } from "./Location";
import { LocationContext } from "./LocationProvider";
import "./Locations.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div style={{ marginTop: "2rem" }}>
            <button>Add New Location</button>
            <div className="locations">
                {
                    locations.map(location => <Location key={location.id} location={location} />)
                }
            </div>
        </div>
    )
}