import React, { useState } from 'react';
import style from './index.module.css';

const Select = (props) => {
    const [input, setInput] = useState('');
    const [focus, setFocus] = useState(false);

    const onChangeHandler = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className={`${style.container}`}>
            <label
                className={`${input.length > 0 ? style.labelUp : style.label}`}
                htmlFor={`${props.name}`}
            >
                {props.placeholder}
            </label>
            <select className={`${style.input}`}
                name={`${props.name}`}
                id={`${props.name}`}
                value={input}
                type={`${props.type}`}
                // placeholder={props.placeholder}
                onChange={onChangeHandler}>
                <option value="Question 1?">Question 1?</option>
                <option value="Question 2?">Question 2?</option>
                <option value="Question 3?">Question 3?</option>
                <option value="Question 4?">Question 4?</option>
            </select>
        </div>
    );
};

export default Select;
