import PropTypes from 'prop-types'

const ImageGalleryItem  = ({smallImg, id, onClick}) => {
        return (
            <li className="ImageGalleryItem" id={id} onClick={onClick} >
                <img src={smallImg} alt="" className="ImageGalleryItem-image" />
            </li>
            
        )
}

ImageGalleryItem.propTypes = {
    smallImg: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem