import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:00PM"
        commentText="Nice blog post!"
        myAvatar={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:20PM"
        commentText="I don't like this."
        myAvatar={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 9:35AM"
        commentText="Where am I?"
        myAvatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
