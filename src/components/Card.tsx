import React, { useState } from 'react';

type CardProps = {
  id: number;
  name: string;
  imgUrl: string;
  isLiked: boolean;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
};

const Card: React.FC<CardProps> = ({ name, imgUrl, isLiked, setLikeCount }) => {
  const [isCardLiked, setIsCardLiked] = useState(isLiked);

  const handleLike = () => {
    setIsCardLiked(!isCardLiked);
    if (!isCardLiked) {
      setLikeCount(prevLikedCount => prevLikedCount + 1);
    } else {
      setLikeCount(prevLikedCount => prevLikedCount - 1);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleLike}>
        {isCardLiked ? 'Liked' : 'Like'}
      </button>
      <img width={50} height={50} src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
