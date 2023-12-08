import Footer from "./Footer";
import Navbar from "./Navbar";
import ImageGallery from "react-image-grid-gallery";

const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "one.jpg",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "two.jpg",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "one.jpg",
    },
    {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: "one.jpg",
    },
    {
        alt: "Image2's alt text",
        caption: "Image2's description",
        src: "two.jpg",
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "one.jpg",
    },
      
];

function Gallery() {
    return ( 
        <div className="min-h-screen">
            <Navbar />
            <div className="mt-24 p-6">
                <ImageGallery imgArray={imagesArray} columnWidth={600} gapSize={24} />
            </div>
            <Footer />
        </div>
    );

}

export default Gallery;