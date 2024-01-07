import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostsSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h2>All Post</h2>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((post) => {
          const { id, title, body } = post;
          return (
            <section key={id}>
              <article>
                <h5>{id}</h5>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default PostsView;
