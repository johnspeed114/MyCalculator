
import PropTypes from 'prop-types'

const Header = ({num, setNum, previousHistory, nextHistory}) => {
    
    return (
        <header className = 'header'>
            <input className = 'mainInput' placeholder = '0' 
            value = {num} onChange = {(e) => setNum(e.target.value)}/>  
    
            <div className='historyButtons'>
                <button id='previous' onClick = {() => previousHistory()}>⬆</button>
                <button id='next' onClick = {() => nextHistory()}>⬇</button>
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
