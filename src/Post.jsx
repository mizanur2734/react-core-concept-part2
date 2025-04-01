export default function Post({ post }) {
  console.log(post);
  return (
    <div className="card">
      <p>{post.title}</p>
    </div>
  );
}
