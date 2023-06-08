import React, { useState } from 'react';

export default function LikeButton(props: {
    setLikeCount: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked((isLiked) => !isLiked);
    };

    return (
        <>
        {!isLiked ? (
        <button type="button" onClick={() => {
            toggleLike();
            props.setLikeCount((prevLikeCount) => prevLikeCount + 1);
          }}
        >Like
        </button>
      ) : (
        <button type="button" onClick={() => {
            toggleLike();
            props.setLikeCount((prevLikeCount) => prevLikeCount - 1);
          }}
        >Liked
        </button>
      )}
        </>
    )
}
