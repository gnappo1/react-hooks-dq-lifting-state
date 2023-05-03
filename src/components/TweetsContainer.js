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
          <TweetList user={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
