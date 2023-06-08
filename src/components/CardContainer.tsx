import React, { useState } from 'react';
import Card from './Card';
import { Data } from './data';

type CardContainerProps = {
  searchQuery: string;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
};

const CardContainer: React.FC<CardContainerProps> = ({ searchQuery, setLikeCount }) => {
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);

  const handleLike = (id: number) => {
    if (likedPhotos.includes(id)) {
      setLikedPhotos((prevLikedPhotos) => prevLikedPhotos.filter((photoId) => photoId !== id));
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, id]);
      setLikeCount((prevCount) => prevCount + 1);
    }
  };

  const filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          isLiked={likedPhotos.includes(item.id)}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
};

export default CardContainer;
