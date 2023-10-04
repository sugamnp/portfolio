//utility functions for constants
//truncate
function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
}

const MAX_WORD_FOR_DESCRIPTION = 25;

export const projects = [
  {
    title: "How we lie with analogies",
    description: truncateText(
      "Lies are rather interesting because we all lie. They are present in our interactions, extending from seemingly innocent white lies to more significant deceptions, often employed for diplomatic reasons or self-preservation...",
      MAX_WORD_FOR_DESCRIPTION
    ),
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Iq5Gn8AO9MrX8CV-7grOgA@2x.jpeg",
    tags: ["Lies", "Deception", "Communication"],
    source:
      "https://medium.com/@sugamnp/how-we-lie-with-analogies-a80caf8242a7",
    id: "0",
  },

  {
    title: "Static and Dynamic Binding",
    description: truncateText(
      "After being tortured by some advanced concepts of Object Oriented Programming (OOP), I decided to become a masochist and understand the unlying construction of the OOP. This idea came to me when I was reading a book by The Gang of Four calle...",
      MAX_WORD_FOR_DESCRIPTION
    ),
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*_BKZmSLohtJDdJIxqdb3ew.jpeg",
    tags: ["OOP", "Inheritance", "Binding"],
    source:
      "https://medium.com/@sugamnp/static-and-dynamic-binding-9cc4547c2fe5",
    id: "1",
  },

  {
    title: "Understanding Dependency Injection",
    description: truncateText(
      "When I began my very first internship at ZooData in Perth, I stumbled upon this development concept called Test Driven Development (TDD). And you know what? It’s still one of the ",
      MAX_WORD_FOR_DESCRIPTION
    ),
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*-OD7sjBBtknjxRX4G-nrFw.png",
    tags: ["C Sharp", "TDD", "Software Development"],
    source:
      "https://medium.com/@sugamnp/understanding-dependency-injection-c837dccfc4e7",
    id: "2",
  },

  {
    title: "How to install Laravel PHP Framework on macOS?",
    description: truncateText(
      "Laravel is a PHP web framework, which is used to make custom web applications using PHP. Here is a tutorial on how to install Laravel on your device.",
      MAX_WORD_FOR_DESCRIPTION
    ),
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*n4uRuoMOg2BfxuFat5298g.png",
    tags: ["PHP", "Laravel", "MacOS"],
    source:
      "https://medium.com/@sugamnp/how-to-install-laravel-php-framework-on-macos-75c4a123984a",
    id: "3",
  },
];

export const TimeLineData = [
  { year: 2019, text: "Started my journey" },
  { year: 2020, text: "Worked as a freelance Developer" },
  { year: 2021, text: "Joined ECU and worked on many projects" },
  { year: 2023, text: "Joined ZooData as a Developer" },
];

export const data = [
  { number: 4, text: "Projects" },
  { number: 1, text: "Top 100 Students Award" },
  { number: 10, text: "Software Engineering Blogs" },
  { number: 10, text: "Certifications" },
];
