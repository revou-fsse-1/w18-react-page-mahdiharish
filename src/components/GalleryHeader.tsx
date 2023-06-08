import React from 'react';

type GalleryHeaderProps = {
  title: string;
  subtitle: string;
  likeCount: number;
};

const GalleryHeader: React.FC<GalleryHeaderProps> = ({ title, subtitle, likeCount }) => {
  let likedPhotosText = '';
  if (likeCount === 0) {
    likedPhotosText = 'You have no liked photos yet!';
  } else {
    likedPhotosText = `You have liked ${likeCount} photo${likeCount > 1 ? 's' : ''}!`;
  }

  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{likedPhotosText}</p>
    </header>
  );
};

export default GalleryHeader;
