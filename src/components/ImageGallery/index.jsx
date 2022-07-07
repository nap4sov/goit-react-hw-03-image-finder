import Button from "components/Button";
import ImageGalleryItem from "components/ImageGalleryItem"
import Modal from "components/Modal"
import { Component } from "react";
import PropTypes from 'prop-types'

class ImageGallery extends Component { 
    state = {
        isModalOpen: false,
        modalId: null
    }

    toggleModal = () => {
        this.setState(({isModalOpen}) => ({isModalOpen: !isModalOpen}))
    }

    handleGalleryItemClick = (event) => {
        this.toggleModal()
        this.setState({modalId: event.currentTarget.id})
    }
    render() {
        const { images, onButtonClick } = this.props
        const { isModalOpen, modalId } = this.state
        const { handleGalleryItemClick, toggleModal } = this
        
        return (
            <>
                <ul className="ImageGallery">
                    {images.map(({ id, webformatURL }) =>
                        <ImageGalleryItem
                            key={id}
                            id={id}
                            smallImg={webformatURL}
                            onClick={handleGalleryItemClick}
                        />)}
                    {isModalOpen && <Modal images={images} onClose={toggleModal} id={modalId} />}
                </ul>
                {images.length >= 12 && <Button onClick={onButtonClick} />}
            </>
        )
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired
    })),
    onButtonClick: PropTypes.func.isRequired
}

export default ImageGallery