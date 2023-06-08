import React, { useState } from 'react';

type CardProps = {
  id: number;
  name: string;
  imgUrl: string;
  isLiked: boolean;
};

const Card: React.FC<CardProps> = ({ id, name, imgUrl, isLiked }) => {
  const [isCardLiked, setIsCardLiked] = useState(isLiked);

  const handleLike = () => {
    setIsCardLiked(!isCardLiked);
  };

  return (
    <div>
      <button type="button" onClick={handleLike}>
        {isCardLiked ? 'Liked' : 'Like'}
      </button>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
