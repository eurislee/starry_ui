import { configure } from "@storybook/react";

const loaderFn = () => {
  const allExports = [
    require(`../src/stories//introduction.stories.js`),
    require(`../src/stories//foundations.stories.js`),
    require("../src/stories/components.stories.js"),
    require("../src/stories/patterns.stories.js"),
  ];
  return allExports;
};

configure(loaderFn, module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
