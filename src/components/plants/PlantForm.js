import { React, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "../locations/LocationProvider";
import { PlantContext } from "./PlantProvider";

export const PlantForm = () => {
    const history = useHistory()
    const { plants, getPlants, createPlant } = useContext(PlantContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [ plant, setPlant ] = useState({})

    useEffect(() => {
        getPlants()
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        const newPlantState = Object.assign({}, plant)
        newPlantState[event.target.name] = event.target.value
        setPlant(newPlantState)
    }

    const createNewPlant = () => {
        const locationId = parseInt(plant.locationId)
        const wateringFrequency = parseInt(plant.wateringFrequency)

        if (locationId === 0) {
            window.alert("Please Pick a Room")
        } else {
            createPlant({
                user: parseInt(localStorage.getItem("terrace_token")),
                title: plant.title,
                nick_name: plant.nickName,
                location_id: locationId,
                about: plant.about,
                watering_frequency: wateringFrequency,
                // date_watered: Date.now()
            }).then(() => history.push("/plants"))
        }
    }

    console.log("incoming plant", plant)
    return (
        <form className="plantForm">
            <h2 className="plantForm__header">Add New Plant</h2>
            {/* <h2 className="animalForm__title">{editMode ? "Update Animal" : "Admit Animal"}</h2> */}
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
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Larry, Moe, Curly, etc..."
                        defaultValue={plant.nick_name}
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
                    <label htmlFor="watering_frequency">Scheduled Watering: </label>
                    <input type="text" name="watering_frequency" required className="form-control"
                        placeholder="How many days between watering?"
                        defaultValue={plant.watering_frequency}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewPlant()
                }}
                className="btn btn-primary">
                {/* {editMode ? "Save Updates" : "Make Reservation"} */}
                Submit
            </button>
        </form>
    )
}