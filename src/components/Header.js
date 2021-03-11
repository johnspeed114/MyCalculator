
import PropTypes from 'prop-types'

const Header = ({num, setNum}) => {
    
    return (
        <header className = 'header'>
            <input id = 'mainInput' placeholder = '0' 
            value = {num} onChange = {(e) => setNum(e.target.value)}/>  
    
            <div>
                <button>Previous</button>
                <button>Next</button>
                {/* usestate needed for the buttons above index */}
                {/* bonus: stop at start and end of the arrays with disabling button */}
            </div>         
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
