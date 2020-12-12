import React from "react";
import JobsClass from "../Jobs/Jobs";
import Header from "../Header";
import { Provider } from "../../AppContext";
import { Container } from "../styled/Container";
import styled from "styled-components";

const Main = styled.main`
  background-color: #ececec;
  height: 100%;
`;

const App = () => {
  return (
    <Provider>
      <Main>
        <Header />
        <Container>
          <JobsClass />
        </Container>
      </Main>
    </Provider>
  );
};

export default App;

