import "./App.css";
import "./Components/AddRecipeForm";
import AddRecipeForm from "./Components/AddRecipeForm";
import "./Components/RecipeList";
import RecipeList from "./Components/RecipeList";

function App() {
  return (
    <div>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
