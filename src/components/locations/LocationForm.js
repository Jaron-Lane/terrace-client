import { React, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "./LocationProvider";

export const LocationForm = (props) => {
    const history = useHistory()
    const { locations, getLocations, createLocations, updateLocations } = useContext(LocationContext)

    const [ location, setLocation ] = useState({})

    const editMode = props.match.params.hasOwnProperty("locationId") // true or fals

    const controlledInputChange = (event) => {
        const newLocationState = Object.assign({}, location)
        newLocationState[event.target.name] = event.target.value
        setLocation(newLocationState)
    }

    /*
        If there is a URL parameter, then the user has chosen to
        edit a room.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the room.
            3. Update component state variable.
    */
    const getLocationEditMode = () => {
        if (editMode) {
            const locationId = parseInt(props.match.params.locationId)
            const selectedLocation = locations.find(l => l.id === locationId)
            setLocation(selectedLocation)
        }
    }

    useEffect(() => {
        getLocations()
    }, [])

    // Once provider state is updated, determine the animal (if edit)
    useEffect(() => {
        getLocationEditMode()
    }, [locations])
    
    const createNewLocation = () => {
        if (location.lighting === "0") {
            window.alert("Please select an amount of natural light")
        } else {
            if (editMode) {
                updateLocations({
                    id: location.id,
                    name: location.name,
                    lighting: location.lighting
                }).then(() => history.goBack())
            } else {
                createLocations({
                    name: location.name,
                    lighting: location.lighting
                }).then(() => history.push("/locations"))
            }
        }
    }
    // console.log("incoming", location)

    return (
        <form className="locationForm">
            <h2 className="locationForm__header">{editMode ? "Update a Room" : "Add a Room"}</h2>
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
                        <option value="Low Light">Low Light</option>
                        <option value="Medium Light">Medium Light</option>
                        <option value="High Light">High Light</option>
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewLocation()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Room"}
            </button>
        </form>
    )

}