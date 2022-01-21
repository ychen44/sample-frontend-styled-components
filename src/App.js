import { ThemeProvider } from "styled-components"; // adding themes globally
import GlobalStyles from './components/styles/Global'
import { Container } from "./components/styles/Container.styled"; // have to use a curly braces because is not a default export
import Header from "./components/Header";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    // theme provider takes in Theme prop, we will have an object called theme
    <ThemeProvider theme={theme}>
<>
   <GlobalStyles/>
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
</>
    </ThemeProvider>
  );
}

export default App;
