import { React, useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "../locations/LocationProvider";
import { PlantContext } from "./PlantProvider";

export const PlantForm = (props) => {
    const history = useHistory()
    const { plants, getPlants, createPlant, updatePlant } = useContext(PlantContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [ plant, setPlant ] = useState({
        // You could put default values to prevent breaking in the future
    })

    const photo = useRef()
    
    const editMode = props.match.params.hasOwnProperty("plantId")
    
    const handleControlledInputChange = (event) => {
        const newPlantState = Object.assign({}, plant)
        newPlantState[event.target.name] = event.target.value
        // event.target.name is grabbing the name value of the input field element!!!
        setPlant(newPlantState)
    }

    const getPlantEditMode = () => {
        if (editMode) {
            const plantId = parseInt(props.match.params.plantId)
            const selectedPlant = plants.find(p => p.id === plantId)
            setPlant(selectedPlant)
        }
    }

    useEffect(() => {
        getPlants()
        getLocations()
    }, [])

    useEffect(() => {
        getPlantEditMode()
    }, [plants])

    const createNewPlant = () => {
        const locationId = parseInt(plant.locationId)
        const wateringFrequency = parseInt(plant.wateringFrequency)

        if (locationId === 0) {
            window.alert("Please Pick a Room")
        } else {
            if (editMode) {
                updatePlant({
                    id: plant.id,
                    title: plant.title,
                    nick_name: plant.nickName,
                    location_id: locationId,
                    about: plant.about,
                    watering_frequency: wateringFrequency,
                }).then(() => history.push("/plants"))
            } else {
            createPlant({
                // on the left side of the colon are the key values of the new plant. Also a user doesnt need to be passed because
                // the server side is receiving it through the request.auth.user
                title: plant.title,
                nick_name: plant.nickName,
                location_id: locationId,
                about: plant.about,
                watering_frequency: wateringFrequency,
                // date_watered: Date.now()
            }).then(() => history.push("/plants"))
            }
        }
    }

    // console.log("incoming plant", plant)
    return (
        <form className="plantForm">
            <h2 className="plantForm__header">{editMode ? "Update Your Plant" : "Add a Plant"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Scientific Name: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        placeholder="Aloe Vera, Pothos, etc..."
                        defaultValue={plant.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Nick Name: </label>
                    <input type="text" name="nickName" required autoFocus className="form-control"
                        placeholder="Larry, Moe, Curly, etc..."
                        defaultValue={plant.nickName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        value={plant.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="about">about: </label>
                    <textarea type="text" name="about" className="form-control"
                        value={plant.about}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="wateringFrequency">Scheduled Watering: </label>
                    <input type="text" name="wateringFrequency" required className="form-control"
                        placeholder="How many days between watering?"
                        defaultValue={plant.wateringFrequency}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button onClick={event => {
                event.preventDefault()
                history.goBack()
            }}>Back</button>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewPlant()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Create Plant"}
            </button>
        </form>
    )
}