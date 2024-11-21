type TagProps = {
  tag: string;
  isActive: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Tag = ({ tag, isActive, handleClick }: TagProps) => {
  return (
    <>
      <button
        className={`tag ${isActive ? "active-tag" : ""}`}
        type="button"
        onClick={handleClick}
      >
        {tag}
      </button>
    </>
  );
};

export default Tag;
