import React, { useState } from "react";
import axios from "axios";

const PostCard = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [postId, setPostId] = useState(null);

  const createPost = async () => {
    if (!title || !body) {
      console.log("Please enter title and body for the post.");
      return;
    }

    const token = localStorage.getItem("authToken");
    console.log("Token:", token);

    if (!token) {
      console.log("Authentication required. Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        "/post/",
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Post created successfully:", response.data);
      setPostId(response.data.id);
    } catch (err) {
      console.log("Error creating post:", err.response?.data || err.message);
    }
  };

  const addComment = async () => {
    if (!comment || !postId) {
      console.log("Please enter a comment and ensure the post is created.");
      return;
    }

    const token = localStorage.getItem("authToken");
    console.log("Token:", token);

    if (!token) {
      console.log("Authentication required. Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        `/post/${postId}/comment/`,
        {
          body: comment,
          post: postId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Comment added successfully:", response.data);
      setComments([...comments, comment]);
      setComment("");
    } catch (err) {
      console.log("Error adding comment:", err.response?.data || err.message);
    }
  };

  const likePost = async (postId) => {
    const token = localStorage.getItem("authToken");
    console.log("Token:", token);

    if (!token) {
      console.log("Authentication required. Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        `/post/like/${postId}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLikes(likes + 1);
      console.log("Post liked successfully:", response.data);
    } catch (err) {
      console.log("Error liking post:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-96 shadow-xl p-4">
        <div className="mb-4">
          <h2>Create Post</h2>
          <input
            type="text"
            placeholder="Post Title"
            className="input input-bordered w-full mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Post Body"
            className="textarea textarea-bordered w-full mb-4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button className="btn btn-primary w-full" onClick={createPost}>
            Create Post
          </button>
        </div>

        <div className="mt-4">
          <h3>Post: {title}</h3>
          <p>{body}</p>

          <div onClick={() => likePost(postId)} className="cursor-pointer mt-2">
            <span>{likes} Likes</span>
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Add a comment"
              className="input input-bordered w-full mb-2"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="btn btn-secondary w-full" onClick={addComment}>
              Add Comment
            </button>
          </div>

          <div className="mt-4">
            <h4>Comments:</h4>
            <ul className="list-disc pl-4">
              {comments.map((comment, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{comment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
