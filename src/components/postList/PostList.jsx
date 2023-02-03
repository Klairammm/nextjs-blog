import PostCard from "../postCard/PostCard";
import styles from "./stylePostList.module.scss";

const PostList = ({ postList }) => {
  return (
    <div className={styles.PostList}>
      {postList.map((post) => (
        <div key={post.id}>
          <PostCard data={post} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostList;
