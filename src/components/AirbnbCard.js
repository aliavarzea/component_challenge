

const AirbnbCard = (props) => {
  
    return (
      <div className = "container">
        {/* <img className = "img" src= {props.image} alt = "airbnb"></img> */}
          <div className = "ratecontainer">
              <h3 className = "maintitle">{props.maintitle}</h3>
              <img className = "rating" src= "./images/airbnb_challenge/star_black.png" alt = "Star rating"><h4 className = "ratenumber">{props.ratenumber} </h4></img>
          </div>
          <p className = "subtitle">{props.subtitle}</p>
      </div>
      );
    }; 

export default AirbnbCard;