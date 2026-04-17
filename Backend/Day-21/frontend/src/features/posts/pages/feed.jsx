import React from "react";
import "../style/feed.scss"

const Feed = () => {
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          <div className="post">
            <div className="user">
                <div className="img-wrapper">
                     <img
                src="https://images.unsplash.com/photo-1774347180942-a30dc0669d61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
                </div>
             
              <p>Username</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1776315670686-d850ac92b748?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="icons">
                <div className="left">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className="right"></div>
            </div>
            <div className="bottom">
              <p className="caption">Caption Caption</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
