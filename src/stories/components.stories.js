import React from "react";
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Button from '../components/button/main';

import './styles/button.styl';
import "../components/button/button.styl";

storiesOf("Components", module)
    .add("Button", () =>
        <div>
            <h2>Basic Buttons</h2>
            <div className="button-example">
                <Button type="primary" onClick={action('clicked')}>
                    Primary
                </Button>

                <Button type="info" onClick={action('clicked')}>
                    Info
                </Button>

                <Button type="warning" onClick={action('clicked')}>
                    Warning
                </Button>

                <Button type="error" onClick={action('clicked')}>
                    Error
                </Button>

                <Button disabled onClick={action('clicked')}>
                    Disabled
                </Button>

                <Button type="primary" dashed onClick={action('clicked')}>
                    Dashed
                </Button>

                <Button type="primary" loading={true} onClick={action('clicked')}>
                    Loading
                </Button>

                <Button type="primary" block onClick={action('clicked')}>
                    100%
                </Button>
            </div>
        </div>
    )
    .add("Alert", () => <div>Alert</div>)
