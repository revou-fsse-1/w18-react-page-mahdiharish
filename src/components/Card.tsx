import React, { useState } from 'react';

type CardProps = {
  id: number;
  name: string;
  imgUrl: string;
  isLiked: boolean;
  handleLike: (id: number) => void;
};

const Card: React.FC<CardProps> = ({ id, name, imgUrl, isLiked, handleLike }) => {
  const [isCardLiked, setIsCardLiked] = useState(isLiked);

  const toggleLike = () => {
    setIsCardLiked(!isCardLiked);
    handleLike(id);
  };

  return (
    <div>
      <button className={`${isLiked ? `green` : `white`}`} type="button" onClick={toggleLike}>
        {isCardLiked ? 'Liked' : 'Like'}
      </button>
      <img width={50} height={50} src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
