import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import RecipeReviewCard from './components/RecipeReviewCard';

function App() {
  return (
    <div className="App">
      <Button variant="outlined">Hello World</Button>
      <Button variant="contained">Hello Everyone</Button>
      <Button variant="text" size='large'>Hello Everyone</Button>
      <RecipeReviewCard />
    </div>
  );
}

export default App;
