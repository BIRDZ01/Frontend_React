import React from "react";
import PostItem from "../../components/post/PostItem";
import savedPost from "../../components/post/DummyPost";
import DailyCheckIn from "../../components/dailyCheckIn/DailyCheckIn";
import "./OwnHomePage.css";

const OwnHomePage = (props) => {
  const postList = savedPost.map((post) => (
    <PostItem
      id={post.id}
      key={post.id}
      date={post.date}
      description={post.description}
    />
  ));
  return (
    <div>
      <img className="profile-pic" alt="profile pic"></img>
      <DailyCheckIn />
      <button onClick={props.onClick} className="logout">
        log out
      </button>
      <ul>{postList}</ul>
    </div>
  );
};

export default OwnHomePage;
