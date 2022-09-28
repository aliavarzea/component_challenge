import UdemyCard from "./UdemyCard";
import img1 from "./images/udemy_challenge/udemy_img1.png";
import img2 from "./images/udemy_challenge/udemy_img2.png";
import img3 from "./images/udemy_challenge/udemy_img3.png";



const Udemy = () => {
    return ( 
    <div><h1>Students are viewing</h1>

            <img src= {img1} alt = "udemy"></img>
            <UdemyCard
                title="The Complete 2022 Web Development Bootcamp"
                author="Dr. Angela Yu"
                rnumber="4.7"
                sales="(224,949)"
                price="£19.99"
                oldprice="£69.99"
                badge="Bestseller">
            </UdemyCard>

            <img src= {img2} alt = "udemy"></img>
            <UdemyCard
                title="100 Days of code: The complete Python Pro Bootcamp for 2022"
                author="Dr. Angela Yu"
                rnumber="4.7"
                sales="(139,610)"
                price="£17.99"
                oldprice="£59.99"
                badge="Bestseller">
            </UdemyCard>

            <img src= {img3} alt = "udemy"></img>
            <UdemyCard
                img={img3}
                title="Ultimate AWS Certified Solutions Architect Associate..."
                author="Stephane Maarek|AWS Certified Cloud Pra..."
                rnumber="4.7"
                sales="(145,685)"
                price="£17.99"
                oldprice="£59.99"
                badge="Bestseller">
            </UdemyCard>
        </div>
        )
        
}



export default Udemy;