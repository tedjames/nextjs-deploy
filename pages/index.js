import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 24px;
  font-family: monospace;
  color: #333;
`;

const Index = props => {
  return (
    <Container>
      <Text>Welcome to index.js</Text>
    </Container>
  );
};

export default Index;
