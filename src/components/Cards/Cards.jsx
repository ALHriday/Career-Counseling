import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Card from "../Card/Card";

const Cards = () => {
    const { cardItems } = useContext(AuthContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 mx-auto">
            {cardItems.map((cardItem, idx) => <Card key={idx} cardItem = {cardItem}></Card>
            )}
        </div>
    );
};

export default Cards;