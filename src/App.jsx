import styled from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <Router />
      </AppDiv>
    </>
  );
}

const AppDiv = styled.div`
  max-width: 700px;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
