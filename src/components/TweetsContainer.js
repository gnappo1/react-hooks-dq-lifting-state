import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUserId, setSelectedUserId] = useState(1);

  const updateUserId = (newId) => {
    setSelectedUserId(newId)
  }

  const handleLike = (tweetId) => {
    setUsers(currentUsers => {
      return currentUsers.map(user => {
        if (user.id === selectedUserId) {
          return {...user, tweets: user.tweets.map(tweet => {
            if (tweet.id === tweetId) {
              return {...tweet, favorite_count: tweet.favorite_count + 1}
            } else {
              return tweet
            }
          })}
        } else {
          return user
        }
      })
    })
  }

  const currentUser = users.find(user => user.id === selectedUserId)

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} updateUserId={updateUserId}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList handleLike={handleLike} user={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
