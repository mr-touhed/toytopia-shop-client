import PopularCard from "./PopularCard";
import "./Populars.css"

const Populars = () => {
    return (
        <div className="popular-content md:py-32 md:pl-28">
            <h2 className="text-3xl text-center md:my-4 p-4 "> Popular Catagorys</h2>

            <div className="grid md:grid-cols-3 grid-cols-1">
            <PopularCard 
                name="Unicorn"
                dec="this most cute and lovely toys for Girls"
            img="https://cdn.shopify.com/s/files/1/0247/3630/1141/products/1pc-25cm-Small-Unicorn-Toys-Soft-Stuffed-Animal-Plush-Toys-Plush-Unicorn-Horse-Doll-Kids-Doll.jpg_640x640_3aba56e8-fb80-46cc-bd57-922ea4af10e2.jpg?v=1574257636"/>
            <PopularCard
                name="Plush Animals"
                dec="This is Attective for 6-12 month little chields"
                img="https://rukminim1.flixcart.com/image/416/416/jjiw1ow0/stuffed-toy/n/2/e/carte-blanche-greetings-me-to-you-sg01w4075-5-inch-tall-tatty-original-imaf72s5wbbnyhdh.jpeg?q=70"
            />
            <PopularCard
                name="Glitter eyes Plush"
                dec="this most cute and lovely toys for all boys and girls"
                img="https://images-na.ssl-images-amazon.com/images/I/71fEMuolfXL._AC_UL600_SR600,600_.jpg"
            />
            </div>
        </div>
    );
};

export default Populars;