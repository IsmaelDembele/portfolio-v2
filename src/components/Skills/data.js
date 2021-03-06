const myTitle = {
  fontColor: "#888",
  fontWeight: "lighter",
};

const axisYValues = {
  title: "Beginner: 10 | Intermediary : 20 | expert: 30  ",
  includeZero: true,
  titleFontSize: 12,
  titleFontFamily: "Poppins",
};
const myData = [
  {
    title: { ...myTitle, text: "Front End Web Development" },
    axisY: axisYValues,
    data: [
      {
        type: "bar",

        dataPoints: [
          { label: "Material-ui", y: 15 },
          { label: "Html", y: 30 },
          { label: "CSS/SASS", y: 20 },
          { label: "Bootstrap", y: 20 },
          { label: "SEO", y: 20 },
          { label: "Redux Toolkit", y: 15 },
          { label: "Typescript", y: 20 },
          { label: "JavaScrypt (ES6+)", y: 20 },
          { label: "Reactjs", y: 15 },
        ],
      },
    ],
  },

  {
    title: { text: "Backend Web Development", ...myTitle },
    axisY: axisYValues,
    data: [
      {
        type: "bar",
        dataPoints: [
          { label: "Node.js/Express", y: 20 },
          { label: "GraphQL", y: 20 },
          { label: "REST API", y: 20 },
          { label: "PostgreSQL", y: 20 },
          { label: "MongoDB/Mongoose", y: 20 },
          { label: "SQL", y: 20 },
          { label: "JWT auth", y: 15 },
          { label: "Session and Cookie auth", y: 10 },
          { label: "CSRF Protection", y: 10 },
        ],
      },
    ],
  },
  {
    title: { text: "Others", ...myTitle },
    axisY: axisYValues,
    data: [
      {
        type: "bar",
        dataPoints: [
          { label: "NPM", y: 20 },
          { label: "Command line Windows/Linux", y: 20 },
          { label: "VS Code", y: 20 },
          { label: "Git, GitHub, Version Control", y: 15 },
          { label: "Photoshop/Gimp", y: 15 },
          { label: "C", y: 15 },
          { label: "Java", y: 15 },
          { label: "Cyber Security", y: 15 },
        ],
      },
    ],
  },
];

export default myData;
