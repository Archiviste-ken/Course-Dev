import React from "react";

import "../style/feed.scss";

const Feed = () => {
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
            <div className="post">
          <div className="user">
            <img src="https://images.unsplash.com/photo-1774579892278-e305439f05dd?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Username</p>
          </div>
          <img src="https://images.unsplash.com/photo-1775510978826-e95b14db6ae6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="bottom">
            <p className="caption">Caption caption</p>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
