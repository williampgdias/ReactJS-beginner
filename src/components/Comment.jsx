import './Comment.css';

const Comment = props => {
  const { name, email, message, date } = props;

  console.log(props);

  return (
    <div className="comment">
      <h2>{name}</h2>
      <p>{message}</p>
      <p>{email}</p>
      <p>{date.toString()}</p>
    </div>
  );
};

export default Comment;
