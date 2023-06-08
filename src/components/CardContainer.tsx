import React from "react";
import Card from "./CardPhotos";
import { Data } from "./data";

type CardContainerProps = {
    searchQuery: string;
};

const CardContainer: React.FC<CardContainerProps> = ({ searchQuery }) => {
    const filteredData = Data.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {filteredData.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
};

export default CardContainer