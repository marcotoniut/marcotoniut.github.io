const prod = process.env.NODE_ENV === "production";

module.exports = {
  // REFERENCE https://github.com/luangjokaj/nextify
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: [
    "@emotion/babel-plugin",
    [
      "transform-define",
      // NOTE Project-based
      // { "process.env.BACKEND_URL": prod ? "/project" : "" },
    ],
  ],
};
