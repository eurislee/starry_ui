import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Patterns", module)
  .add("Empty States", () => <div>Empty States</div>)
  .add("Error Messages", () => <div>Error Messages</div>)
  .add("Table Layout", () => <div>Table Layout</div>);
