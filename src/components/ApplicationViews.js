import { React } from "react";
import { Route } from "react-router-dom";
import { PlantProvider } from "./plants/PlantProvider";
import { PlantList } from "./plants/PlantList";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { PlantForm } from "./plants/PlantForm";
import { LocationForm } from "./locations/LocationForm";
import { PlantDetails } from "./plants/PlantDetail";
import { TodayList } from "./plants/TodayList";

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <Route exact path="/">
                    <TodayList />
                </Route>
                <Route exact path="/todays_plants">
                    <TodayList />
                </Route>
            </PlantProvider>

            <PlantProvider>
                <LocationProvider>
                    <Route exact path="/plants">
                        <PlantList />
                    </Route>

                    <Route exact path="/plants/create" render={
                        props => <PlantForm {...props}/>
                    } />
                    
                    <Route path="/plants/:plantId(\d+)" render={
                        props => <PlantDetails {...props} />
                    } />

                    <Route path="/plants/edit/:plantId(\d+)" render={
                    props => <PlantForm {...props} />
                    } />
                </LocationProvider>
            </PlantProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route exact path="/locations/create" render={
                        props => <LocationForm {...props}/>
                    } />

                <Route path="/locations/edit/:locationId(\d+)" render={
                    props => <LocationForm {...props} />
                } />
            </LocationProvider>
        </>
    )
}