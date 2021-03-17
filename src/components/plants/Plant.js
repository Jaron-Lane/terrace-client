import { React } from "react";
import "./Plants.css";

export default ({ plant }) => (
    <section className="plant">
        <h3 className="plant__nick_name">{ plant.nick_name }</h3>
        <div className="plant__title">{ plant.title }</div>
        <div className="plant__watering_frequency">{ plant.watering_frequency }</div>
    </section>
)