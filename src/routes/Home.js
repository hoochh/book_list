import axios from 'axios';
import React from 'react';
import Festival from './components/Festival';
import './Festival.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    festivals: [],
    count: 5,
  };

  render() {
    const { isLoading, festivals } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="festivals">
            {festivals.map((festival) => {
              return (
                <Festival
                  UC_SEQ={festival.key}
                  TITLE={festival.title}
                  SUBTITLE={festival.subTitle}
                  GUGUN_NM={festival.location}
                  ITEMCNTNTS={festival.contents}
                  MAIN_IMG_THUMB={festival.img}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }

  getfestivals = async () => {
    try {
      const {
        data: {
          data: { festivals },
        },
      } = await axios.get(
        'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?ServiceKey=HJ68D5bz%2FqRPlhL9cllA0ZxfYcX1FOlGM4Z7rKvTLbTy2BgxEkibizeIrqVRx1yq4FopjvseaR151d%2FJWf6a9A%3D%3D&resultType=json&numOfRows=5&pageNo=1',
      );
      this.setState({ festivals: festivals, isLoading: false });
    } catch (err) {
      console.log('통신시 오류가 발생했습니다.');
      console.log(err);
    }
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 5000);
    this.getfestivals();
  }
}

export default Home;
