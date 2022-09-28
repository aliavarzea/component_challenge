
const UdemyCard = (props) => {
  
    return (
    <div className = "container">
      {/* <img className = "img" src={props.image} alt = "Udemy"></img> */}
      <h3 className = "title">{props.title}</h3>
      <p className = "author">{props.author}</p>
        <div className = "rcontainer">
            <h4 className = "rnumber">{props.rnumber}
            <img className = "rating" src= "./images/udemy_challenge/star_full.png" alt = "Star rating"></img>
            <img className = "rating" src= "./images/udemy_challenge/star_full.png" alt = "Star rating"></img>
            <img className = "rating" src= "./images/udemy_challenge/star_full.png" alt = "Star rating"></img>
            <img className = "rating" src= "./images/udemy_challenge/star_full.png" alt = "Star rating"></img>
            <img className = "rating" src= "./images/udemy_challenge/star_half.png" alt = "Star rating"></img>
            </h4>
            <p className = "sales">{props.sales}</p>
        </div>
        <div className = "pcontainer">
            <h3 className = "price">{props.price}</h3>
            <h3 className = "oldprice">{props.oldprice}</h3>
        </div>
      <button className = "badge">{props.badge}</button>
    </div>
    );
  }; 



export default UdemyCard;

