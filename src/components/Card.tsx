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
    <div className="relative w-[200px] h-[270px] rounded-xl overflow-hidden bg-black hover:scale-105 transition-transform">
      <button
        className={`${
          isCardLiked ? 'bg-green-500 text-white' : 'bg-white text-black'
        } absolute top-2 right-2 z-10 px-2 py-1 rounded-full`}
        type="button"
        onClick={toggleLike}
      >
        {isCardLiked ? 'Liked' : 'Like'}
      </button>
      <img className="object-cover w-full h-full" src={imgUrl} alt={name} />
      <p className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-2">{name}</p>
    </div>
  );
};

export default Card;
