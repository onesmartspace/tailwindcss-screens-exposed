const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  const screenMedia = (step) =>
    "@media screen and (min-width: " + theme("screens." + step) + ")";

  if (process.env.NODE_ENV === "development") {
    addComponents([
      {
        "body::after": {
          position: "fixed",
          content: '"XS"',
          bottom: 0,
          left: 0,
          padding: "2px 4px",
          background: "#FFFFFF60",
          color: "black",
          border: "1px solid #00000050",
          lineHeight: 1,
          transition: "all 1s",
        },
      },
      {
        [screenMedia("sm")]: {
          "body::after": {
            content: '"SM"',
          },
        },
      },
      {
        [screenMedia("md")]: {
          "body::after": {
            content: '"MD"',
          },
        },
      },
      {
        [screenMedia("lg")]: {
          "body::after": {
            content: '"LG"',
          },
        },
      },
      {
        [screenMedia("xl")]: {
          "body::after": {
            content: '"XL"',
          },
        },
      },
      {
        [screenMedia("2xl")]: {
          "body::after": {
            content: '"XXL"',
          },
        },
      },
    ]);
  }
});
