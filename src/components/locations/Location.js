import { React, useContext } from "react";
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
        <section className="location">
            <h3 className="location__name">{ location.name }</h3>
            <div className="location__lighting">{ location.lighting }</div>
            <button onClick={() => {
                history.push(`/locations/edit/${location.id}`)
            }}>
                Edit
            </button>
            <button onClick={() => { confirmDelete() }}>
                Delete
            </button>
        </section>
    )
}