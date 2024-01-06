import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Services/Action/toDosAction";

const ToDos = () => {
  const { isLoading, toDos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  return (
    <div>
      <h1>Todos App</h1>
      {isLoading && <h3>Loading.........</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {toDos &&
          toDos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id}>
                <h6>{id}</h6>
                <h3>{title}</h3>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default ToDos;

ToDos.propTypes = {
  props: PropTypes.any,
};
