import axios from 'axios';
import React from 'react';
import Book from './components/Book';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    books: [],
    count: 5,
  };

  render() {
    const { isLoading, books } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="books">
            {books.map((book) => {
              return (
                //title, description, rights, extent, referenceIdentifier
                <Book
                  title={book.title}
                  description={book.description}
                  rights={book.rights}
                  extent={book.extent}
                  referenceIdentifier={book.referenceIdentifier}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }

  getBooks = async () => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await axios.get(
        'http://api.kcisa.kr/openapi/service/rest/meta13/getKPEF0103?serviceKey=2c36ce87-f468-43a4-8fdc-fc6537b3d966',
      );
      this.setState({ books: books, isLoading: false });
    } catch (err) {
      console.log('통신시 오류가 발생했습니다.');
      console.log(err);
    }
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 5000);
    this.getBooks();
  }
}

export default Home;
