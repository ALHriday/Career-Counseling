import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Card from "../Card/Card";

const Cards = () => {
    const { cardItems } = useContext(AuthContext);

    return (
        <div className="grid grid-cols-2 gap-6">
            {cardItems.map((cardItem, idx) => <Card key={idx} cardItem = {cardItem}></Card>
            )}
        </div>
    );
};

export default Cards;