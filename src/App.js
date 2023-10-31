import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";

import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome />
      <BookList />
      {/* <AllTheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;
