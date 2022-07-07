import { Component } from "react";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Searchbar from "./Searchbar";
import ErrorHandler from "./ErrorHandler";
import Button from "./Button";
import {fetchImages} from '../services/pixabayAPI'

export class App extends Component {
  state = {
    query: '',
    page: 1,
    status: 'idle',
    images: [],
    totalImages: 0,
    errorMessage: ''
  }

  async componentDidUpdate(_, prevState) {
    const { query, page, images } = this.state
    
    if (prevState.query === query && prevState.page === page) {
      return
    }
    
    this.setState({ status: 'pending' })

    try {
      const data = await fetchImages(query, page)

      if (data.total === 0) {
          throw new Error('Nothing found to match your query');
      }
      
      this.setState({
        status: 'fulfilled',
        totalImages: data.totalHits,
        images: query !== prevState.query ? data.hits : [...images, ...data.hits],
        })
    } catch (error) {
      this.setState({status: 'rejected', errorMessage: error.message})
    }
  }

  handleSubmit = (query) => {
    this.setState({ query, page: 1 })
  }

  onLoadMoreClick = () => {
    this.setState(({ page }) => ({ page: page + 1 }))
  }

  render() {
    const { status, images, totalImages, errorMessage } = this.state
    const { handleSubmit, onLoadMoreClick } = this
    const imagesEmpty = images.length === 0;
    const allImagesShown = images.length >= totalImages;
      return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        <div className="container">
          {!imagesEmpty && <ImageGallery images={images}/>}
          {status === 'pending' && <Loader />}
          {!allImagesShown && <Button onClick={onLoadMoreClick} />}
          {status === 'rejected' && <ErrorHandler message={errorMessage} />}
        </div>
      </>
  )
    };
};
