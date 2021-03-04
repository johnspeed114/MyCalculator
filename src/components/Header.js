
import PropTypes from 'prop-types'

const Header = ({num, setNum}) => {
    
    return (
        <header className = 'header'>
            <input id = 'mainInput' type = 'number' placeholder = '0' 
            value = {num} onChange = {(e) => setNum(e.target.value)}/>           
        </header>
    )
}

// Header.Header = {
//     theNumber: 0
// }


// Header.propTypes = {
//     theNumber: PropTypes.number.isRequired,
// }
export default Header
