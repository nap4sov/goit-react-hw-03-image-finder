import { Component } from "react"
import Modal from "components/Modal"

class ImageGalleryItem extends Component {
    state = {modalOpen: false}

    toggleModal = () => {
        this.setState(({modalOpen}) => ({modalOpen: !modalOpen}))
    }

    render() {
        const { modalOpen } = this.state
        const {smallImg, largeImg} = this.props
        return (
            <li className="ImageGalleryItem" onClick={this.toggleModal}>
                <img src={smallImg} alt="" className="ImageGalleryItem-image" />
                {modalOpen && <Modal largeImg={largeImg} onClose={this.toggleModal} />} 
            </li>
            
        )
    }
}
    

export default ImageGalleryItem