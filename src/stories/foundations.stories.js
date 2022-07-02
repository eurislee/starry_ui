import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Foundations", module)
  .add("Colors", () => <div>Colors</div>)
  .add("Icons", () => <div>Icons</div>)
  .add("Layout Primitives", () => <div>Layout Primitives</div>)
  .add("Typography", () => <div>Typography</div>);
