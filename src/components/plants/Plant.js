import { React } from "react";
import { Link } from "react-router-dom";
import "./Plants.css";

export default ({ plant }) => (
    <section className="plant">
        <h3 className="plant__nick_name">
            <Link to={`/plants/${plant.id}`}>
                { plant.nick_name }
            </Link>
        </h3>
        { plant.photo ? <img src={plant.photo} /> : ""}
        <div className="plant__title">{ plant.title }</div>
        <div className="plant__watering_frequency">{ plant.watering_frequency }</div>
    </section>
)