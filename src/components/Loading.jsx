import styled, { keyframes } from "styled-components";

const frame = keyframes`
0% {
    height: 10em;
}

50% {
    height: 5em;
}

100% {
    height: 10em;
}
`;

const LoadContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  div {
    background-color: crimson;
    height: 10em;
    width: 2em;
    animation: ${frame} 1.5s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export const Loading = () => {
  return (
    <LoadContainer>
      <div></div>
      <div></div>
      <div></div>
    </LoadContainer>
  );
};
