import { useContext } from "react";
import PostContext from "./Post-context";

const PostItems = (props) => {
  const postCtx = useContext(PostContext);

  const deletePostHandler = (amount) => {
    postCtx.removeItem({
      id: props.id,
      date: props.date,
    });
  };
  return (
    <li>
      <div>
        <h3>{props.date}</h3>
        <div>{props.description}</div>
      </div>
      <button onClick={deletePostHandler}>delete</button>
    </li>
  );
};

export default PostItems;
