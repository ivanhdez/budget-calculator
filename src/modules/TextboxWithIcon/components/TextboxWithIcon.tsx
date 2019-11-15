import React from 'react';

export const TextboxWithIcon = (props: any) => {
    const {
        icon,
        placeholder,
        type = "text",
        label,
        helperText
    } = props;

    return <>
        <div className="bp3-form-group .modifier">
            <label className="bp3-label" htmlFor="form-group-input">
                {label}
                <span className="bp3-text-muted">(required)</span>
            </label>
            <div className="bp3-form-content">
                <div className="bp3-input-group .modifier">
                <span className="bp3-icon bp3-icon-calendar"></span>
                <input id="form-group-input" type="text" className="bp3-input"
                    style={{width: "200px;"}} placeholder="Placeholder text" dir="auto" />
                </div>
                <div className="bp3-form-helper-text">{helperText}</div>
            </div>
        </div>
    </>;
}