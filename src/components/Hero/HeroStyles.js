import styled, { keyframes } from "styled-components";
import { SectionTitle } from "../../styles/GlobalComponents";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
const wave = keyframes`
0% {
  transform: rotate(8.0deg);
}
5% {
  transform: rotate(14.0deg);
}
10% {
  transform: rotate(-14.0deg);
}
15% {
  transform: rotate(18.0deg);
}
20% {
  transform: rotate(-8.0deg);
}
25% {
  transform: rotate(18.0deg);
}
30% {
  transform: rotate(-6.0deg);
}
35% {
  transform: rotate(10.0deg);
}
40% {
  transform: rotate(8.0deg);
}
100% {
  transform: rotate(8.0deg);
}
`;

export const HandEmoji = styled(SectionTitle)`
  display: inline-block;
  animation: ${wave};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  /* Add any other styles you need for the hand emoji */
`;
