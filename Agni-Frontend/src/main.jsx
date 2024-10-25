import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Agni  from './App.jsx'
import GlobalStyles from './styles/globalStyles';


// This will render your App component into the DOM element with id "root"
// Note: Replace 'App' with your actual App component name
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles  />
    <Agni />
  </StrictMode>
);
