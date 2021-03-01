import {useState} from 'react'
import PropTypes from 'prop-types'

const Header = () => {
    const [theNumber, setNumber] = useState('');
    return (
        <header className = 'header'>
            <input id = 'mainInput' type = 'number' placeholder = '0' 
            value = {theNumber} onChange = {(e) => setNumber(e.target.value)}/>           
        </header>
    )
}

Header.Header = {
    theNumber: 0
}


Header.propTypes = {
    theNumber: PropTypes.number.isRequired,
}
export default Header
