import React from 'react';
import "./Main.scss";

export const Main = (props: any) => {
    return <>
        <div className={"app-main"}>
            {props.children}
        </div>
    </>
}