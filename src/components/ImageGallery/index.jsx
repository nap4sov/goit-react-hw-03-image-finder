import ImageGalleryItem from "components/ImageGalleryItem"

const ImageGallery = ({images}) => { 
        return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL, largeImageURL }) =>
            <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                largeImg={largeImageURL}
            />)}
        </ul>
    )
}
    

export default ImageGallery