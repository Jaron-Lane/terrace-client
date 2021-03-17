import { React } from "react";
import { Route } from "react-router-dom";
import { PlantProvider } from "./plants/PlantProvider";
import { PlantList } from "./plants/PlantList";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <Route exact path="/">
                    <PlantList />
                </Route>
            </PlantProvider>

            <PlantProvider>
                <Route exact path="/plants">
                    <PlantList />
                </Route>

                <Route exact path="/plants/create">
                    <PlantForm />
                </Route>
            </PlantProvider>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}