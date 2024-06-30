export type EmailDataProps = (typeof EMAILS)[0];

export const EMAILS = [
  {
    id: "1",
    name: "John Smith",
    avatar: "https://mighty.tools/mockmind-api/content/human/65.jpg",
    marker: "importante",
    subject: "What is Lorem Ipsum?",
    message:
      "type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    star: false,
    date: "12 de fev.",
  },
  {
    id: "2",
    name: "Andy",
    avatar: "https://mighty.tools/mockmind-api/content/human/44.jpg",
    subject: "Where does it come from?",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    star: true,
    date: "13 de fev.",
  },
  {
    id: "3",
    name: "Mike",
    avatar: "https://mighty.tools/mockmind-api/content/human/57.jpg",
    subject: "Why do we use it?",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    star: false,
    date: "13 de fev.",
  },
];
