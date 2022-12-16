import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types'


const SelectOption = ({ optionData }) => {

    const [val, setVal] = useState('')
    return (
        <div>
            <Form.Select value={val} onChange={e => setVal(e.target.value)}>
                {
                    optionData.map(opt => <option key={opt}>{opt}</option>)
                }
            </Form.Select>
        </div>
    );
}

SelectOption.defaultProps = {
    data: ["one", "two", "three", "four", "five"]
}

SelectOption.propTypes = {
    optionalArray: PropTypes.array,
}

export default SelectOption;