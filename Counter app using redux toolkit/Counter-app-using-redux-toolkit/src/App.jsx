import "./App.css";
import CounterView from "./Features/Counter/CounterView";
import PostsView from "./Features/Posts/PostsView";

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
