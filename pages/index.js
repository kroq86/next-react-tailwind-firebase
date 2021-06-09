import Head from "next/head";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { useRef } from "react";
import Post from "./Post";

export default function Home() {
  const inputRef = useRef(null);
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts").add({
      body: inputRef.current.value,
    });
    inputRef.current.value = "";
  };
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("body", "desc")
  );

  return (
    <div className="block px-8 py-6 lg:flex lg:items-center lg:justify-between shadow-md">
      <form>
        <input type="text" ref={inputRef} placeholder="type here" />
        <button hidden type="submit" onClick={sendPost}>
          Submit
        </button>
      </form>

      <br />

      <div>
        {realtimePosts?.docs.map((post) => (
          <Post body={post.data().body} />
        ))}
      </div>
    </div>
  );
}
