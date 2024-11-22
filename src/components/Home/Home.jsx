import { useContext } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Home = () => {

    const { homeCard, user } = useContext(AuthContext);

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto gap-6">
                <h1 className="text-4xl font-bold my-6 col-span-1 md:col-span-2 lg:col-span-3 px-6 border-b py-6">Career Counselor: </h1>
                {homeCard && homeCard.map((card, idx) => <div className="mx-auto" key={idx}>
                    <div className="card bg-base-100 w-76 md:w-80 shadow-xl border">
                        <div className="w-72 h-[200px] p-4">
                            <img className="w-full h-full object-fill rounded-xl"
                                src={card.image}
                            />
                        </div>
                        <div className="card-body items-center">
                            <h2 className="card-title">
                                {card.counselor}
                                <div className="badge badge-secondary">{card.category}</div>
                            </h2>
                            <p>{card.service_name}</p>
                            <p>Price: {card.pricing}</p>
                            <p>Duration: {card.duration}</p>
                            <p>Rating: {card.rating}</p>
                            <div className="card-actions justify-center">
                                {user && user.email ? <Link to='/Services'><button className="btn btn-accent btn-sm">Details</button></Link> : <Link to='/LogIn'><button className="btn btn-accent btn-sm">Details</button></Link>}
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Home;