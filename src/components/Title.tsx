interface TitleProps {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-10 mb-10 justify-start items-start">
      {title && (
        <div className="flex flex-row items-center justify-center gap-5">
          <hr className="border-primary border-2 w-20 rounded" />
          <small>{title}</small>
        </div>
      )}

      {description && <h2 className="text-3xl font-bold">{description}</h2>}
    </div>
  );
};

export default Title;
