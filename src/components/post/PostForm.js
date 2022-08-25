const PostForm = (props) => {
  const deletePostHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <button onClick={deletePostHandler}>delete</button>
    </div>
  );
};
export default PostForm;
