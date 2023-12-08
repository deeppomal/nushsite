import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
    return ( 
        <div className="min-h-screen">
            <Navbar />
            <div className="mt-24 h-screen">
                <div className="w-full lg:h-2/3">
                    <img src="one.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="mt-3 w-full flex items-center justify-center flex-col mb-10 px-5">
                    <p className="font-bold lg:text-3xl text-2xl mt-4">WHO IS NUSH?</p>
                    <p className="font-thin  mt-12 text-center lg:w-1/2">Here at Jane, healthy eating means having a salad and a cookie—it's all about balance.</p>
                    <p className="font-thin  mt-4 text-center lg:w-1/2">Born from a deep-seated love of all things culinary, Amanda Michael founded JANE to satisfy her passion and deliver memorable experiences to the many loyal and transient guests who have come to love the institution. Amanda' s career in food and hospitality spans decades and she has spent many years cooking and baking in a myriad of restaurants.</p>
                    <p className="font-thin  mt-4 text-center lg:w-1/2">Amanda opened Jane on Fillmore in February 2011 with the mission of serving top quality coffee, pastries, breakfast and lunch. We serve healthy food with an emphasis on flavor and quality of ingredients. Everything is made fresh daily from scratch.</p>
                    <p className="font-thin  mt-4 text-center lg:w-1/2">Jane on Larkin opened in 2013 and our expanded space allowed us to introduce our own line of breads in addition to our house-made pastries. We also introduced our full catering department.</p>
                    <p className="font-thin  mt-4 text-center lg:w-1/2">In late 2016, Jane the Bakery opened, allowing us to expand our bakery program even more. We bake several dozen breads daily as well as a full line of laminated items and pastries. Our breads and pastries have quickly gained recognition as some of the best you can find.</p>
           
                </div>
                <Footer />
            </div>
            
        </div>
     );
}

export default About;