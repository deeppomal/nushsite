import Footer from "./Footer";

function Menu() {
    const MENU = [
        {
            id:1,
            photo:'one.jpg',
            title:'COFFEE',
            description:'Since we opened, our mission has been to serve the community high quality coffee in a friendly, approachable manner. We have always preferred our coffee on the darker side and our coffee reflects those tastes. We custom blend and roast our beans to a medium-dark roast, just dark enough to bring out rich chocolate flavors while still maintaining sweetness.'
        },
        {
            id:2,
            photo:'two.jpg',
            title:'COFFEE',
            description:'Since we opened, our mission has been to serve the community high quality coffee in a friendly, approachable manner. We have always preferred our coffee on the darker side and our coffee reflects those tastes. We custom blend and roast our beans to a medium-dark roast, just dark enough to bring out rich chocolate flavors while still maintaining sweetness.'
        },
        {
            id:3,
            photo:'one.jpg',
            title:'COFFEE',
            description:'Since we opened, our mission has been to serve the community high quality coffee in a friendly, approachable manner. We have always preferred our coffee on the darker side and our coffee reflects those tastes. We custom blend and roast our beans to a medium-dark roast, just dark enough to bring out rich chocolate flavors while still maintaining sweetness.'
        },
        {
            id:4,
            photo:'two.jpg',
            title:'COFFEE',
            description:'Since we opened, our mission has been to serve the community high quality coffee in a friendly, approachable manner. We have always preferred our coffee on the darker side and our coffee reflects those tastes. We custom blend and roast our beans to a medium-dark roast, just dark enough to bring out rich chocolate flavors while still maintaining sweetness.'
        }
    ]
    return ( 
        <div className="h-screen lg:px-10 px-5">
            <div className="h-1/4 w-full flex justify-center items-center flex-col">
                <h1 className="font-bold lg:text-3xl text-2xl">Drinks at Jane</h1>
                <p className="font-thin lg:w-1/2 w-full text-center mt-2 lg:text-xl">When you order a drink at Jane, you’re going to have a hard time finding something that isn’t house made.
                Roasting coffee. Blending teas. Brewing chai. Creating new juices. Developing original drinks. We do all of this in-house.</p>
            </div>
            {
                MENU.map((data,index) => {
                    return(
                        <div key={data.id} className={`w-full lg:h-1/2 flex lg:mt-4 ${index!=0 ? 'mt-12' : 'mt-4'} flex-col lg:flex-row`}>
                            <div className={`flex ${index%2 == 0 ? 'lg:order-2' : 'lg:order-1'} lg:w-1/2 flex-col items-center justify-center`}>
                                <p className="font-bold lg:text-3xl text-xl">{data.title}</p>
                                <p className="font-thin lg:w-3/4 text-center mt-2 lg:text-lg">{data.description}</p>
                            </div>
                            <div className={`lg:w-1/2 ${index%2 == 0 ? 'lg:order-1' : 'lg:order-2'} mt-4 lg:mt-0 flex items-center justify-center lg:overflow-hidden`}>
                                <img src={data.photo} className="h-full w-full "/>
                            </div>
                        </div>
                    )
                })
            }
            <Footer />
        </div>
     );
}

export default Menu;