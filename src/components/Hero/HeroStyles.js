import styled, { keyframes } from "styled-components";
import { SectionTitle } from "../../styles/GlobalComponents";

const generateWaveKeyframes = () => {
  let keyframes = "";
  for (let i = 0; i <= 100; i += 1) {
    // Amplitude value determines how high/low the wave goes
    const amplitude = 25; // Change this value to adjust the wave height
    // Sine function creates the wave motion, amplitude is added here
    const rotation = 10 + amplitude * Math.sin((i / 100) * Math.PI * 2);
    keyframes += `
      ${i}% {
        transform: rotate(${rotation}deg);
      }
    `;
  }
  return keyframes;
};

const wave = keyframes`${generateWaveKeyframes()}`;

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

    margin: 0 auto;a
  }
`;

export const HandEmoji = styled(SectionTitle)`
  display: inline-block;
  animation: ${wave};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  /* Add any other styles you need for the hand emoji */
`;
