import Star from '/images/star.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/images/${props.image}`} className="card--image" alt="Human" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})  •  </span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">${props.price}</span> / person</p>
        </div>
    )
}