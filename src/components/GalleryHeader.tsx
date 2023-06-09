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
    <header className="py-2 flex justify-center items-center">
      <div className="absolute top-0 right-0 px-4 py-2 bg-green-500 rounded-bl-2xl">
        <span className="text-slate-50 text-xl">{likedPhotosText}</span>
      </div>
      <div className="text-center">
        <h1 className="text-4xl text-slate-50 font-bold mb-2">{title}</h1>
        <h2 className="text-xl text-slate-50 font-semibold">{subtitle}</h2>
      </div>
    </header>
  );
};

export default GalleryHeader;
