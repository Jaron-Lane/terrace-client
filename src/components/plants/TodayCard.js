import { React } from "react";
import "./Plants.css";

export const TodayCard = ({ plant }) => (
    <section className="plant">
        <h3 className="plant__nick_name">{ plant.nick_name }</h3>
        <div className="plant__title">{ plant.location }</div>
        <button type="submit">Plant is Watered</button>
    </section>
)