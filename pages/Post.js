function Post({ body }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-1xl font-bold leading-6 text-gray-900 sm:text-2xl sm:truncate">
        {body}
      </h2>
    </div>
  );
}

export default Post;
