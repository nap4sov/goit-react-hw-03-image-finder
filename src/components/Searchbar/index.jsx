import { Component } from "react";
import PropTypes from 'prop-types'

class Searchbar extends Component{
    state = {
        value: ''
    }

    handleTextInput = (event) => {
        const value = event.currentTarget.value
        this.setState({value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.value)
    }

    render() {
        const { value } = this.state
        const { handleSubmit, handleTextInput } = this

        return (
    <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            </button>

            <input
                value={value}
                onChange={handleTextInput}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>
    )
    } 
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar