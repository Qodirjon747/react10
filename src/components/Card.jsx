import './card.css'

function Card(props) {
  return (
    <div>
      <div className="card-box container">
        <img src="./i.png" alt="" />
        <div className="text">
            <h2>{props.ism}</h2>
            <h3>{props.kasb}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
