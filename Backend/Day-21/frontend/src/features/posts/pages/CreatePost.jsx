import React from "react";

const CreatePost = () => {
  return (
    <main className="create-post-page">
      <div className="form-container">
        <h1>Create Post</h1>
        <form>
          <label htmlFor="postImage">Select image</label>
          <input type="file" name="postImage" id="postImage" />
          <input type="text" name="caption" id="caption" />
          <button className="button primary-button">create post</button>
        </form>
      </div>

      <div></div>
    </main>
  );
};

export default CreatePost;
