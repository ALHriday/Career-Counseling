import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Card = ({ cardItem }) => {
    // console.log(cardItem);
    const { handleDetails } = useContext(AuthContext);
    const {id, service_name, image, category, pricing, duration, counselor, rating } = cardItem;

    return (
        <div className="">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                         />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">
                        {counselor}
                        <div className="badge badge-secondary">{ category}</div>
                    </h2>
                    <p>{ service_name}</p>
                    <p>Price: { pricing}</p>
                    <p>Duration: { duration}</p>
                    <p>Rating: { rating}</p>
                    <div className="card-actions justify-center">
                        <Link to={`Card/${id}`}><button onClick={() => handleDetails(cardItem)} className="btn btn-accent">Details</button></Link>
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