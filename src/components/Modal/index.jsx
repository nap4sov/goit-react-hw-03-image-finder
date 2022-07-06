import { Component } from "react"
import { createPortal } from "react-dom"

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {

    handleCloseOnEsc = (event) => {
        if (event.code !== 'Escape') {
            return
        }
        this.props.onClose()
    }
    handleCloseOnClick = (event) => {
        if (event.target === event.currentTarget) {
            console.log(this.props.onClose);
            this.props.onClose()
            return
        }
        console.log('nono');
    } 
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseOnEsc)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseOnEsc)
    }

    render() {
        const {largeImg} = this.props
        return createPortal(
            <div onClick={this.handleCloseOnClick} className="Overlay">
                <div className="Modal">
                    <img src={largeImg} alt="" />
                </div>
            </div>,
            modalRoot
        )
    }
}
export default Modal