import React from "react";
import Card from "./Card";
import { Data } from "./data";

type CardContainerProps = {
    searchQuery: string;
    setLikeCount: React.Dispatch<React.SetStateAction<number>>;
};

const CardContainer: React.FC<CardContainerProps> = ({ searchQuery, setLikeCount }) => {
    const filteredData = Data.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {filteredData.map((item) => (
                <Card key={item.id} {...item} setLikeCount={setLikeCount} />
            ))}
        </div>
    );
};

export default CardContainer