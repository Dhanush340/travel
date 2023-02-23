import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} className="card--image" alt="pic" />
            <div className="card--left">
                <div className="card--title">
                    <img src="../images/map.png" className="card--map" alt="map" />
                    <span className="place--name">{props.item.placeName}</span>
                    <span className="map--text">View on Google Maps</span>
                    <p className="location">{props.item.location}</p>
                    <p className="date">{props.item.date}</p>
                    <p className="discription">{props.item.description}</p>
                </div>

            </div>
        </div>
    )
}
/* <div className="card--stats">
<img src="../images/star.png" className="card--star" />
<span>{props.item.stats.rating}</span>
<span className="gray">({props.item.stats.reviewCount}) • </span>
<span className="gray">{props.item.location}</span>
</div>
<p className="card--title">{props.item.title}</p>
<p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p> 



<div className="card">

            <img src={`../images/fiji.jfif`} className="card--image" alt="pic" />
            <div className="card--stats">
                <img src="../images/map.png" className="card--map" alt="map" />
                <span className="country--name">JAPAN</span>
                <span className="map--text">view on googel map</span>

                <p className="location">Mount Fuji</p>
            </div>

            <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>

        </div>










        <div class="container pb-4">
            <div class="row">
                <div class="col-lg-3">
                    <img src={`../images/fiji.jfif`} alt="pic" />
                    <div class="horizontal-card">


                        <div class="horizontal-card-body">
                            <img src="../images/map.png" className="card--map" alt="map" />
                            <span class="country--name">JAPAN</span>
                            <span class="map--text">view on googel map</span>
                        </div>
                        <div class="location">
                            <span class="country--name">Mount Fuji</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>

*/
