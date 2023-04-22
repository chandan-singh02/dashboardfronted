import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateComponent";
import PrivateComponent from "./components/PrivateComponent";
import ProductList from "./components/ProductList";

import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList></ProductList>} />
            <Route path="/add" element={<AddProduct></AddProduct>} />
            <Route
              path="/update/:id"
              element={<UpdateProduct></UpdateProduct>}
            />
            <Route path="/logout" element={<h1> Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>
          <Route path="/signup" element={<Register></Register>} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
//we dont make here logout routes beacuse we dont want another routes but u can do
export default App;
