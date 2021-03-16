import { React } from "react";
import { Route } from "react-router-dom";
import { PlantProvider } from "./plants/PlantProvider.js";
import { PlantList } from "./plants/PlantList.js";

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <Route exact path="/">
                    <PlantList />
                </Route>
            </PlantProvider>
        </>
    )
}