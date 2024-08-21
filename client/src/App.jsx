import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<RecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<RecipeForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
