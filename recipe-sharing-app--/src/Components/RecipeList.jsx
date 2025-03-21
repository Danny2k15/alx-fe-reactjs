
 // RecipeList component
 import { useRecipeStore } from './RecipeStore';
 import { Link } from 'react-router-dom'; // Import Link
 
 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);
   const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
   return (
     <div>
          {filteredRecipes.map((recipe) => (
         <div key={recipe.id}>
           <h3>{recipe.title}</h3>
           <p>{recipe.description}</p>
         </div>
       ))}
     </div>
   );
 };

 export default RecipeList;
