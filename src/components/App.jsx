import { Component } from "react";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Searchbar from "./Searchbar";
import ErrorHandler from "./ErrorHandler";
import {fetchImages} from '../services/pixabayAPI'

export class App extends Component {
  state = {
    query: '',
    page: 1,
    status: 'idle',
    images: [],
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
    this.setState(({page}) => ({page: page + 1}))
  }

  render() {
    const { status, images, errorMessage } = this.state
    const { handleSubmit, onLoadMoreClick } = this
      return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        <div className="container">
          {status === 'fulfilled' && <ImageGallery images={images} onButtonClick={onLoadMoreClick} />}
          {status === 'pending' && <Loader />}
          {status === 'rejected' && <ErrorHandler message={errorMessage} />}
        </div>
      </>
  )
    };
};
