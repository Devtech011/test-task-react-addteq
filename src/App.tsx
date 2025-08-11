import { ThemeProvider } from "./contexts/ThemeContext";
import { ProductComparison } from "./components/ProductComparison";

function App() {
  return (
    <ThemeProvider>
      <ProductComparison />
    </ThemeProvider>
  );
}

export default App;
