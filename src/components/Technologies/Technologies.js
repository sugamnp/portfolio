import React from "react";
import {
  DiApple,
  DiFirebase,
  DiGithub,
  DiReact,
  DiZend,
  DiGit,
  DiAptana,
  DiWindows,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>My Expertise</SectionTitle>
    <br />
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React and NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django, ASP.NET and Flask
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAptana size="3rem" />
        <ListContainer>
          <ListTitle> Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Agile Methodologies, <br />
            TDD and DevOps practices
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWindows size="3rem" />
        <ListContainer>
          <ListTitle>Cross Platform Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Xamarin and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAptana size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            JUnit, XUnit and NUnit
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
