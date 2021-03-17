import { React } from "react";
import { Route } from "react-router-dom";
import { PlantProvider } from "./plants/PlantProvider";
import { PlantList } from "./plants/PlantList";

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <Route exact path="/">
                    <PlantList />
                </Route>
            </PlantProvider>

            <PlantProvider>
                <Route path="/plants">
                    <PlantList />
                </Route>
            </PlantProvider>
        </>
    )
}