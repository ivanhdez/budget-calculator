import React from 'react';
import { Button } from "@blueprintjs/core";

export class WiggleButton extends React.Component<any, any> {
    public state: any = {
        active: false,
        disabled: false,
        iconOnly: false,
        large: false,
        loading: false,
        minimal: false,
        wiggling: false,
    };
    private wiggleTimeoutId: number = 0;

    private wiggle = () => {
        window.clearTimeout(this.wiggleTimeoutId);
        this.setState({ wiggling: true });
        this.wiggleTimeoutId = window.setTimeout(() => this.setState({ wiggling: false }), 300);
    };

    render = () => {
        return <>
            <Button
                className={this.state.wiggling ? "docs-wiggle" : ""}
                icon="refresh"
                onClick={this.wiggle}
            >
                {"Click to wiggle"}
            </Button>
        </>;
    }
}