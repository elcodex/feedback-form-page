import PropTypes from 'prop-types';
import "./Input.css";
import { useRef, useState, useEffect } from 'react';

export default function Input({ type, label, focus = false, isRequired = false, setValue, id}) {
    const labelRef = useRef(null);
    const inputRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");

    useEffect(() => {
        if (focus) {
            inputRef.current.focus();
        }
    }, [focus]);
    
    function handleFocus() {
        if (!currentValue) {
            labelRef.current.classList.add("label_top");
        }
    }

    function handleBlur() {
        if (!currentValue) {
            labelRef.current.classList.remove("label_top");
        }
    }

    function handleChange(event) {
        setCurrentValue(event.currentTarget.value);
        setValue(event.currentTarget.value);
    }

    function handleClick() {
        inputRef.current.focus();
    }

    function renderInputField() {
        if (type === "textarea") {
            return <textarea
                ref={inputRef}
                className="input"
                required={isRequired}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={currentValue}
                id={id}
            />
        }

        return <input type="text"
            ref={inputRef}
            className="input"
            required={isRequired}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={currentValue}
            id={id}
        />
    }
    
    return (
        <div className="form__input" onClick={handleClick}>
            
            {renderInputField()}

            <label htmlFor={id} ref={labelRef} className="input__label">
                {`${label} ${isRequired ? "*" : ""}`}
            </label>
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.oneOf(['input', 'textarea']).isRequired,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    setValue: PropTypes.func,
    focus: PropTypes.bool,
    id: PropTypes.string.isRequired,
}