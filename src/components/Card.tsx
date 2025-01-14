interface CardProps {
  title: string;
  content: string;
  createdAt: Date;
  completed?: boolean;
  id: string;
}

function Card({ title, content, createdAt, completed = false, id }: CardProps) {
  return (
    <div className="border rounded-md border-red-600 p-4">
      <h1 className="font-bold text-4xl">{title}</h1>
      {completed ? <p className="line-through">{content}</p> : <p>{content}</p>}
      <input type="checkbox" name="" id={id} checked={completed} />
      <p>{createdAt.toLocaleDateString()}</p>
    </div>
  );
}

export default Card;
