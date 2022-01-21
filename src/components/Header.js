import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
// <StyledHeader bg="#c8a8f0">
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styles";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>
        {/* <h1>Hubble</h1>
        <h3>amber's test site</h3> */}
      </Container>
    </StyledHeader>
  );
}
