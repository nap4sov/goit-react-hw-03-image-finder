import { Component } from "react"
import { createPortal } from "react-dom"
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {

    handleCloseOnEsc = (event) => {
        if (event.code !== 'Escape') {
            return
        }
        this.props.onClose()
    }
    handleCloseOnClick = (event) => {
        if (event.target !== event.currentTarget) {
            return
        }
        this.props.onClose()
    } 
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseOnEsc)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseOnEsc)
    }

    render() {
        const { handleCloseOnClick } = this

        const currentId = Number(this.props.id)
        const currentImageUrl = this.props.images.find(image => image.id === currentId).largeImageURL
        
        return createPortal(
            <div onClick={handleCloseOnClick} className="Overlay">
                <div className="Modal">
                    <img src={currentImageUrl} alt="" />
                </div>
            </div>,
            modalRoot
        )
    }
}

Modal.propTypes = {
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })),
    onClose: PropTypes.func.isRequired
}

export default Modal