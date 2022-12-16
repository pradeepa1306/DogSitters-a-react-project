import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('enter')
    }

    return (
        <header className='header'>
            <h2>{title}</h2>
            <Button text='New sitting' onClick={onClick} />
        </header>
    )
}
Header.defaultProps = {
    title: 'Dog Sitters',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header