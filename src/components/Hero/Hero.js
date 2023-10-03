import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HandEmoji } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <HandEmoji>👋🏻</HandEmoji> Hello, <br />
        I'm Sugam Neupane
      </SectionTitle>
      <SectionText>
        A software engineer passionate about building digital wonders. In this
        corner of the web, you'll find a showcase of my coding expertise. From
        crafting responsive websites to developing smart applications, I love
        bringing ideas to life through lines of code.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
