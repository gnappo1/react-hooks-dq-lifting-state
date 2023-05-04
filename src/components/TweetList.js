import React from "react";
import TweetItem from "./TweetItem";

function TweetList(props) {

  const mappedTweets = props.user?.tweets?.map((tweet) => (
    <TweetItem
      key={tweet.id}
      handleTweetLike={props.handleLike}
      handle={props.user.handle}
      photo={props.user.photo}
      tweet={tweet}
    />
  ))
  return (
    <div className="ui segment">
      <div className="ui feed">
        {mappedTweets}
      </div>
    </div>
  );
}

export default TweetList;
