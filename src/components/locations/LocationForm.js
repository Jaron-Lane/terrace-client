import { React, useContext, useState } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "./LocationProvider";

export const LocationForm = () => {
    const history = useHistory()
    const { getLocations, createLocations } = useContext(LocationContext)

    const [ location, setLocation ] = useState({})

    const controlledInputChange = (event) => {
        const newLocationState = Object.assign({}, location)
        newLocationState[event.target.name] = event.target.value
        setLocation(newLocationState)
    }
    
    const createNewLocation = () => {
        createLocations({
            name: location.name,
            lighting: location.lighting
        }).then(() => history.push("/locations"))
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__header">Add a Room</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Room Name:</label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Bedroom, Living Room, etc..."
                        defaultValue={location.name}
                        onChange={controlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="lighting">Lighting:</label>
                    <select name="lighting" className="form-control"
                        value={location.lighting}
                        onChange={controlledInputChange}>

                        <option value="0">Select Lighting</option>
                        <option value="1">Low Light</option>
                        <option value="2">Medium Light</option>
                        <option value="3">High Light</option>
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewLocation()
                }}
                className="btn btn-primary">
                {/* {editMode ? "Save Updates" : "Make Reservation"} */}
                Submit
            </button>
        </form>
    )

}