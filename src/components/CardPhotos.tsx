import React from "react";

type CardProps = {
    id: number;
    name: string;
    imgUrl: string;
    isLiked: boolean;
};

const Card: React.FC<CardProps> = ({ name, imgUrl, isLiked }) => {
    return (
        <div>
            <img src={imgUrl} alt={name} />
            <p>{name}</p>
            <p>{isLiked ? "Liked" : "Like"}</p>
        </div>
    );
};

export default Card