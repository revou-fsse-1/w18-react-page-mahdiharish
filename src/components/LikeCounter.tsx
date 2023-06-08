export default function LikeCount(props: { value: number }) {
  const likeCount = props.value;

  return (
    <div>
      {likeCount > 0
        ? `You have liked (${likeCount} photos!)`
        : `You have no liked photos yet!)`}
    </div>
  );
}