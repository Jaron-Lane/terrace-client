import { React } from "react";
import "./Locations.css";

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{ location.name }</h3>
        <div className="location__lighting">{ location.lighting }</div>
        <button>
            Edit
        </button>
        <button>
            Delete
        </button>
    </section>
)