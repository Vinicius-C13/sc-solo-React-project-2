import React from "react"

export default function Card(props) {
    return (
        <div className="container">
            <div className="card">
                <img src={props.item.imageUrl} />
                <div>
                    <div className="card--location">
                        <div className="card--location-info">
                            <img className="card--pin" src="./image/placeholder.png" />
                            <span className="card--country">{props.item.location}</span>
                            <a href={props.item.googleMapsUrl}><span>View on Google Maps</span></a>
                        </div>
                        <h1 className="card--title">{props.item.title}</h1>
                    </div>
                    <div className="card--info">
                        <div className="card--date">{props.item.startDate} - {props.item.endDate}</div>
                        <div className="card--description">{props.item.description}</div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}