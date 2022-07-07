import ImageGalleryItem from "components/ImageGalleryItem"
import Modal from "components/Modal"
import { Component } from "react";
import PropTypes from 'prop-types'

class ImageGallery extends Component { 
    state = {
        isModalOpen: false,
        modalImageUrl: ''
    }

    toggleModal = () => {
        this.setState(({isModalOpen}) => ({isModalOpen: !isModalOpen}))
    }

    handleGalleryItemClick = (event) => {
        const { images } = this.props
        
        this.toggleModal()
        this.setState({
            modalImageUrl: images.find(image => image.id === Number(event.currentTarget.id)).largeImageURL
        })
    }
    render() {
        const { images } = this.props
        const { isModalOpen, modalImageUrl } = this.state
        const { handleGalleryItemClick, toggleModal } = this
        
        return (
                <ul className="ImageGallery">
                    {images.map(({ id, webformatURL }) =>
                        <ImageGalleryItem
                            key={id}
                            id={id}
                            smallImg={webformatURL}
                            onClick={handleGalleryItemClick}
                        />)}
                    {isModalOpen && <Modal imageUrl={modalImageUrl} onClose={toggleModal} />}
                </ul>
        )
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired
    }))
}

export default ImageGallery