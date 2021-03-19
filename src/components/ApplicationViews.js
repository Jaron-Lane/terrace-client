import { React } from "react";
import { Route } from "react-router-dom";
import { PlantProvider } from "./plants/PlantProvider";
import { PlantList } from "./plants/PlantList";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { PlantForm } from "./plants/PlantForm";
import { LocationForm } from "./locations/LocationForm";

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <Route exact path="/">
                    <PlantList />
                </Route>
            </PlantProvider>

            <PlantProvider>
                <LocationProvider>
                    <Route exact path="/plants">
                        <PlantList />
                    </Route>

                    <Route exact path="/plants/create">
                        <PlantForm />
                    </Route>

                </LocationProvider>
            </PlantProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route path="/locations/create">
                    <LocationForm />
                </Route>

                <Route path="/locations/edit/:locationId(\d+)" render={
                    props => <LocationForm {...props} />
                } />
            </LocationProvider>
        </>
    )
}