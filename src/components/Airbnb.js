import AirbnbCard from "./AirbnbCard"
import img4 from "./images/airbnb_challenge/abnb_img1.png";
import img5 from "./images/airbnb_challenge/abnb_img2.png";
import img6 from "./images/airbnb_challenge/abnb_img3.png";
import img7 from "./images/airbnb_challenge/abnb_img4.png";

const AirBnb = () => {
    return ( 
    <div><h1>Students are viewing</h1>

            <img src= {img4} alt = "udemy"></img>
            <AirbnbCard
                title1="Island . Badachro"
                ratenumber="4.7"
                subtitle="Nature Observatory on Secluded Island">
            </AirbnbCard>

            <img src= {img5} alt = "udemy"></img>
            <AirbnbCard
                img={img5}
                title1="Island . Badachro"
                ratenumber="4.7"
                subtitle="Nature Observatory on Secluded Island">
            </AirbnbCard>


            <img src= {img6} alt = "udemy"></img>
            <AirbnbCard
                img={img6}
                title1="Island . Badachro"
                ratenumber="4.7"
                subtitle="Nature Observatory on Secluded Island">
            </AirbnbCard>


            <img src= {img7} alt = "udemy"></img>
            <AirbnbCard
                img={img7}
                title1="Island . Badachro"
                ratenumber="4.7"
                subtitle="Nature Observatory on Secluded Island">
            </AirbnbCard>
        </div>
        )   
}

export default AirBnb;