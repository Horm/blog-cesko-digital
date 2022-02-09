import { Author } from "lib/author";
import { BlogPost } from "lib/post";

interface Props {
  post: BlogPost;
  author: Author;
}

const PostCard: React.FC<Props> = ({ post, author }) => {
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });
  return (
    <a href={post.path} className="post-card-link">
      <div className="post-card">
        <img
          alt=""
          loading="lazy"
          width="100%"
          style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          src={post.coverImageUrl}
        />
        <div className="post-card-meta">
          <div className="post-card-author">
            {formatDate(post.date)}
            {" • "}
            {author.name}
          </div>
          <h2>{post.title}</h2>
          <p className="post-card-description">{post.description}</p>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
