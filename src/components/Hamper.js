import Menu from "./Menu";
import Navbar from "./Navbar";

function Hamper() {
    return ( 
        <div className="min-h-screen">
            <Navbar />
            <div className="mt-24">
                <Menu />
            </div>
        </div>
     );
}

export default Hamper;