import React from 'react';
import { Navbar as BluePrintNavbar, Alignment, Button } from '@blueprintjs/core';

export const Navbar = (props: any) => {
    const {
        title
    } = props;

    return <>
    <BluePrintNavbar>
      <BluePrintNavbar.Group align={Alignment.LEFT}>
        <BluePrintNavbar.Heading>{title || "App"}</BluePrintNavbar.Heading>
        <BluePrintNavbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
      </BluePrintNavbar.Group>
    </BluePrintNavbar></>;
}
