import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} className="card--image" alt="pic" />
            <div className="card--left">
                <div className="card--title">
                    <img src="../images/map.png" className="card--map" alt="map" />
                    <span className="place--name">{props.item.placeName}</span>
                    <span className="map--text"><a href={`${props.item.placeUrl}`}>View on Google Maps</a></span>
                    <p className="location">{props.item.location}</p>
                    <p className="date">{props.item.date}</p>
                    <p className="discription">{props.item.description}</p>
                </div>

            </div>
        </div>
    )
}
