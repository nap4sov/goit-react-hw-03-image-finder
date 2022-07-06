import { Component } from "react";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Searchbar from "./Searchbar";
import {fetchImages} from '../services/pixabayAPI'

export class App extends Component {
  state = {
    query: '',
    page: 1,
    status: 'idle',
    modalOpen: false,
    images: null
  }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state
    
    if (prevState.query === query) {
      return
    }
    this.setState({status: 'pending'})

    setTimeout(() => {fetchImages(query, page)
      .then(data => {
        if (data.total === 0) {
          throw new Error('Nothing found to match your query');
        }
        this.setState({ status: 'fulfilled', images: data.hits})
    }).catch(error => {
      console.log(error.message);
      this.setState({status: 'rejected'})
    })}, 1000)
  }

  handleSubmit = (query) => {
    this.setState({ query })
  }

  render() {
      const {status, images } = this.state
      return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
          {status === 'fulfilled' && <ImageGallery images={images} />}
          {status === 'pending' && <Loader />}
      </div>
  )
    };
};
