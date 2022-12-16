import PropTypes from 'prop-types'

const Button = ({ bgcolor, color, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: bgcolor, color: color }} className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: '#fff',
    bgcolor: '#000',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    onClick: PropTypes.func
}


export default Button