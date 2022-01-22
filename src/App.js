import { ThemeProvider } from "styled-components"; // adding themes globally
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled"; // have to use a curly braces because is not a default export
import Header from "./components/Header";
import Card from "./components/Card";
import content from "./content";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    // theme provider takes in Theme prop, we will have an object called theme
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
