import PropTypes from 'prop-types'

const Button = ({ onClick }) => 
     <button onClick={onClick} className="Button" type="button">Load more</button>

Button.propTypes = {
     onClick: PropTypes.func.isRequired
}

export default Button