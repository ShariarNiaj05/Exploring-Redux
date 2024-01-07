import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Navbar from "./Layouts/Navbar/Navbar";
import BooksView from "./Features/Books/BooksView";
import AddBook from "./Features/Books/AddBook";
import EditBook from "./Features/Books/EditBook";
import Footer from "./Layouts/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
          <Route path="/show-books" element={<BooksView></BooksView>}></Route>
          <Route path="/add-book" element={<AddBook></AddBook>}></Route>
          <Route path="/edit-book" element={<EditBook></EditBook>}></Route>
        </Routes>
      </main>
      <Footer></Footer>

      {/* <Router></Router> */}
    </BrowserRouter>
  );
}

export default App;
