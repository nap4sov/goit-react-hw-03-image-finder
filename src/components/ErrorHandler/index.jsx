import PropTypes from 'prop-types'

const ErrorHandler = ({ message }) => 
    <div className="errorContainer">
        <p className="errorMessage">{message}</p>
    </div>

ErrorHandler.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorHandler