import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CardDetails = () => {
    const { cardItemDetails } = useContext(AuthContext);
    const navigate = useNavigate();

    const { service_name, image, category, pricing, duration, counselor, rating, brief_description } = cardItemDetails;

    return (
        <div className="py-12 flex justify-center items-center">
            <div className="card bg-base-100 w-96 shadow-xl relative">
                <figure >
                    <div className="w-full h-[180px]">
                        <img className="w-full h-full"
                            src={image}
                        />
                    </div>
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-4xl">
                        {counselor}
                        <div className="badge badge-success">{category}</div>
                    </h2>
                    <p>{service_name}</p>
                    <p>Price: {pricing}</p>
                    <p>Duration: {duration}</p>
                    <p>Rating: {rating}</p>

                    <div className="p-4 text-center">
                        <p>Description: </p>
                        <p>{brief_description}</p>
                    </div>
                    <div className="absolute -top-2 -right-2">
                        <button onClick={() => navigate('/Services')} className="btn btn-sm btn-secondary font-bold rounded-full">x</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;