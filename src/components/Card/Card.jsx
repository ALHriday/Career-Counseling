import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Card = ({ cardItem }) => {

    const { handleDetails } = useContext(AuthContext);
    const { id, image, service_name, category, pricing, duration, counselor, rating } = cardItem;

    return (
        <div>
            <div className="card bg-base-100 w-76 md:w-80 shadow-xl mx-auto border">
                <div className="w-76 md:w-80 h-[200px] p-4 flex justify-center">
                    <img className="w-full h-full object-fill rounded-xl"
                        src={image}
                    />
                </div>
                <div className="card-body items-center">
                    <h2 className="card-title">
                        {counselor}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>{service_name}</p>
                    <p>Price: {pricing}</p>
                    <p>Duration: {duration}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-center">
                        <Link to={`Card/${id}`}><button onClick={() => handleDetails(cardItem)} className="btn btn-accent btn-sm">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardItem: PropTypes.object
}

export default Card;