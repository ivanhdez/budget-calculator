import React from 'react';
import { InputGroup, FormGroup, Button, Label } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import './Login.scss';

export interface LoginProps {
    // onClickLogin: () => void;
}

export interface LoginState {
    user: string;
    pass: string;
    requestActive: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);

        this.state = {
            requestActive: false,
            user: "",
            pass: ""
        };
    }

    public onClickLogin = () => {
        this.setState({
            requestActive: true
        });

        setTimeout(() => {
            this.setState({
                requestActive: false
            })
        }, this.getRandom() * 100);
    }

    getRandom = (min: number = 1, max: number = 20) => {
        return ~~(Math.random() * max) + min
    }

    public onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user: e.target.value
        });
    }

    public onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            pass: e.target.value
        });
    }

    public render = () => {
        const {
            requestActive,
            pass,
            user
        } = this.state;

        return <>
            <div className={"app-login"}>
                <div className={"app-logo-wrapper"}>
                    <img className={"app-logo"} src={"logo-placeholder.jpeg"}/>
                </div>
                <FormGroup
                    labelFor="username"
                    inline={true}
                >
                    <InputGroup 
                        id="username" 
                        placeholder="Usuario"
                        leftIcon={IconNames.USER}
                        value={user}
                        onChange={this.onUsernameChange}
                    />
                </FormGroup>
                <FormGroup
                    labelFor="password"
                    inline={true}
                >
                    <InputGroup 
                        id="password" 
                        placeholder="Contraseña"
                        leftIcon={IconNames.LOCK}
                        type={"password"}
                        value={pass}
                        onChange={this.onPasswordChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button
                        text={"Entrar"}
                        onClick={this.onClickLogin}
                        icon={IconNames.LOG_IN}
                        loading={requestActive}
                    />
                </FormGroup>
                <a>¿Olvidaste tu contraseña?</a>
            </div>
        </>;
    }
}