import React from 'react';
import PropTypes from 'prop-types';
//import Festival from './components/Festival';
import './App.css';
import { Link } from 'react-router-dom';

const festivals = [
  {
    id: 1,
    title: '부산바다축제',
    subTitle: '부산하면 여름, 여름하면 부산바다축제!',
    location: '수영구',
    contents:
      "타오르는 태양, 시원한 바다, 금빛 백사장, 화려한 네온사인, 신나는 음악!\n\n이 모든 것을 한 번에 즐길 수 있는 부산의 대표 여름축제, 부산바다축제를 소개한다.\n부산바다축제는 해마다 여름이 되면 해운대, 광안리, 다대포, 송도, 송정해수욕장 등 부산 시내 5개의 해수욕장에서 열린다.\n축제는 각 해수욕장의 색깔을 담은 다양한 프로그램으로 사람들을 맞이하는데 축제의 시작을 여는 것은 해운대에서 펼쳐지는 개막파티다. 매해 새로운 모습을 추구하며 대규모 살수시설 및 버블폼, 인공 풀장을 활용한 '풀파티' 컨셉의 올 스탠딩 참여 공연으로 시작한다.\n개막파티를 놓친 이들이라도 매일 새롭게 열리는 참여행사를 통해 바다축제를 즐길 수 있는데, 해운대 구남로 일원에서 펼쳐지는 물의 난장 행사가 그 중 하나이다. 미니풀장과 물총을 이용한 워터 카니발 컨셉의 이 행사는 밴드공연팀, EDM 공연 및 다양한 이벤트와 함께 개최되는 프로그램이다.\n광안리의 밤바다를 열정적으로 즐기고 싶은 이들을 위한 디제잉의 향연도 펼쳐진다. 국내에 거주하는 외국인 DJ들이 펼치는 디제잉 경연대회는 주체할 수 없는 에너지를 맘껏 표출할 수 있는 신나는 젊음의 장이다.\n뜨거운 여름밤을 달구기에 춤만 한 것도 없다, 광안리 해변에서 펼쳐지는 댄스파티 현장은 보는 것만으로도 몸치에서 탈출할 수 있을 것만 같다. 국‧내외 댄스 동호인들의 열정적인 스윙, 살사, 줌바 댄스를 직접 따라하다 보면 몸이 저절로 박자를 즐기고 있다.\n다양하고 신나는 공연은 계속 이어진다.\n부산 바다의 조용한 정취를 좋아하는 이들에게는 재즈 페스티벌을, 미래의 힙합 전사들에게는 광안리 힙 나잇을, 다대포 낙조의 낭만을 경험하고자 한다면 다대포 포크樂 페스티벌을 추천한다. 최고의 뮤지션들이 밤바다를 배경으로 연주하는 음악과 그들의 노랫소리는 귀를 호강시켜주기에 충분하니 말이다.\n그 외에도 송도해수욕장에서는 국민가수 현인을 기리는 현인가요제가, 송정해수욕장에서는 서핑체험과 함께 다양한 문화행사가 펼쳐지는 송정해변축제가 열린다.\n\n더불어 건전한 장애인 놀이문화와 다양한 스포츠행사, 레크레이션이 진행되는 장애인 한바다축제, 부산 청소년 바다축제도 열려 남녀노소, 장애인‧비장애인 할 것 없이 누구나 즐길 수 있는 부산바다축제임을 보여준다.\n부산의 바다가 간직한 매력은 어디까지일까.\n밤의 풍경, 음악, 젊음, 열정.\n부산의 여름을 생각했을 때 떠오르는 많은 말들이 있지만 부산바다축제야말로 그 모든 것을 다 담고 있는 종합선물세트라고 할 수 있을 것이다.\n\n무엇을 생각하든 그 이상을 만날 수 있는 축제.\n이 축제만으로 여름의 부산을 찾을 이유는 충분하지 않을까.",
    thumb: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191213191711585_thumbL',
    img: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191213191711585_ttiel',
  },
  {
    id: 2,
    title: '태종대에서 만난 오색찬란 수국의 매력',
    subTitle: '부산 수국꽃문화축제를 가다',
    location: '영도구',
    contents:
      '본격적인 휴가철이 시작되기 전, 초여름의 부산에서 반드시 만나야할 축제가 있다.\n태종대에 위치한 사찰 태종사 일대에서 매년 6월 말 ~ 7월 초에 열리는 수국꽃문화축제가 바로 그 주인공이다. 태종대의 해안절경을 만끽하며 오색찬란한 수국을 제대로 즐길 수 있는 관광코스로도 유명하다.\n\n수국꽃문화축제가 열리는 태종사로 가는 방법은 두 가지다. 태종대를 즐기며 태종사까지 걷는 도보형, 그리고 다누비열차를 이용하는 다누비형이 있다. 수국 축제를 빨리 만나고 싶다면 다누비 열차를 타고 태종사 입구에 내려 아름다운 수국꽃길 걸으며 태종사로 오르면 된다. 걷기를 좋아하는 방문자라면 산책길을 따라 태종사까지 여유롭게 걸어보는 것도 좋겠다. 상쾌한 바닷바람 맞으며 천천히 걷다보면 수국꽃 흐트러진 태종사 입구가 여행자를 반긴다.\n\n태종사의 수국들은 주지스님께서 40여 년 동안 심고 가꾸어온 것이라 한다. 스님께서는 다양한 수국 모종을 구하기 위해 세계 곳곳을 돌며 발품을 팔았다고 한다. 현재 태종사 일대 수국의 종류가 30여 종, 총 5000여 그루에 달한다고 하니 그 규모가 엄청나다. 태종사 수국의 장관을 시민들과 함께 나누고픈 스님의 바람을 담아 2006년부터 수국꽃문화축제가 시작되었다.\n\n한국의 대표적인 수국 군락지로 유명한 태종사 일대는 매년 축제 기간이 되면 수국의 향연을 즐기려는 많은 사람들로 북적인다. 여기저기 터지는 셔터소리와 조용한 웃음소리, 그리고 활짝 핀 수국이 어우러져 또 다른 광경을 선사한다. 다채로운 색을 간직한 수국은 그 색깔에 따라 꽃말도 여러 개를 가지고 있다. 분홍색은 ‘진심 & 처녀의 꿈’, 청색은 ‘냉정’, 흰색은 ‘변덕’이라고 하니 다채로운 색깔만큼이나 다양한 꽃말이 재밌다. 축제 기간 중에는 냉면을 무료로 시식하는 ‘꽃밭냉면시식회’를 비롯, ‘꽃밭포토존’, ‘꽃밭버스킹’, ‘힐링숲길 산책로체험’ 등 다양한 프로그램이 준비되어 있으므로 일정표를 꼭 확인하여 축제를 알차게 즐겨 봐도 좋을 것이다.\n\n사랑하는 사람의 손을 잡고, 시원한 여름바람 맞으며 즐기는 오색찬란한 수국꽃밭. 작은 모종을 하나 둘 심어온 정성스러운 손길. 그 손길이 시간을 만나 이루어낸 놀라운 기적을 직접 만나보자.',
    thumb: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191222160520749_thumbL',
    img: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191222160520749_ttie',
  },
  {
    id: 3,
    title: '문화로 노닐다 금정산성축제',
    subTitle: '역사를 느낄 수 있는 금정산성축제',
    location: '금정구',
    contents:
      '5월은 축제의 계절, 부산 금정구에서도 금정산성의 역사와 문화를 연계한 금정산성축제를 개최한다.\n전국 최장 길이 금정산성과 경치 좋은 산책길 온천천 일대에서 펼쳐지는 3일간의 문화예술 체험축제이다. 녹음이 우거진 금정산성 마을에서 즐기는 역사문화여행, 호패 하나 손에 쥐고 떠나는 오감만족 체험의 세계로 방문객을 초대한다.\n금정구 일원에서도 신나는 거리공연과 다양한 부대행사를 진행한다.\n5월엔 축제 프로그램 풍성한 금정산성으로 놀러가자!',
    thumb: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191227115551778_thumbL',
    img: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191227115551778_ttiel',
  },
  {
    id: 4,
    title: '구포나루의 추억과 낭만 낙동강구포나루축제',
    subTitle: '낙동강구포나루축제',
    location: '북구',
    contents:
      '싱그러운 봄, 솔솔 부는 강바람에 구포나루의 정겨운 북적거림이 실려 온다.\n조선시대 낙동강 뱃길의 출발지로 교역문화의 꽃을 피웠던 구포나루터. 번성했던 옛 구포나루를 그대로 재연해 당시의 감동과 향수를 선사하는 낙동강구포나루축제가 매년 화명생태공원에서 개최된다. 낙동강과 더불어 살아온 사람들의 삶, 그 진솔한 이야기를 다양한 공연과 체험‧전시 프로그램에 담아낸다.\n강변에서 펼쳐지는 낙동강구포나루축제에서 향기로운 추억 만들기 도전해볼까?',
    thumb: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191227120157384_thumbL',
    img: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191227120157384_ttiel',
  },
  {
    id: 5,
    title: '아름다운 부산 밤하늘의 하모니, 부산불꽃축제',
    subTitle: '모두를 감싸주는 가을밤 불꽃과 함께',
    location: '수영구',
    contents:
      '부산의 가을은 화려한 불빛으로 꽃핀다. 광안리 해변은 물론, 광안리 바다가 내려다보이는 곳이라면 부산 곳곳에 사람들이 모인다. 사람들의 수많은 이목이 광안리 바다와 하늘에 활짝 핀 불꽃에 하나로 모였다. 지금은 바로 부산불꽃축제의 시간이다.\n\n반짝이는 광안대교가 보이기 시작한다. 광안대교가 가까워질수록 사람들은 점점 모여들어서 점차 발 디딜 틈도 보이지 않는다. 하지만 가을밤 기분 좋을 정도로 쌀쌀한 바닷바람을 맞으며 불꽃을 기다리는 사람들의 표정은 피어날 불꽃보다도 밝은 듯하다.\n\n부산불꽃축제를 더욱 즐겁게 즐기기 위한 아이템에는 무엇이 있을까? 무엇보다 보온에 신경을 쓰는 게 좋다. 낮에는 따뜻한 날씨일지라도 가을밤바다는 바람도 많이 불고 춥기 때문에, 출발할 때는 약간 덥다고 느낄지라도 따뜻한 외투도 입고 담요도 챙기는 것이 좋다. 그리고 수많은 사람이 광안리에 모이는 만큼 한 번 자리를 잡으면 불꽃축제가 끝날 때 까지 다시 나갔다가 자리로 돌아오기 쉽지 않다. 불꽃축제와 함께 즐길 먹을거리와 마실 거리를 미리 챙기고, 화장실도 자리에 앉기 전에 미리 해결해서 난감한 경우가 생기지 않도록 하자.\n\n미리 도착해서 함께 불꽃축제를 즐길 사람들과 먹을거리를 나누며 기다리는 시간. 긴 시간 같지만 점점 많아지는 사람들을 바라보며 즐거운 축제의 분위기에 젖어 들다보면 어느새 주위는 어둑어둑해진다. 이제 불꽃의 시간이 얼마 남지 않았다.\n백 만 명이 넘는 사람이 함께 외치는 카운트다운 소리와 함께 드디어 불꽃축제가 시작됐다. 한 발 한 발 까만 밤하늘 위로 선을 그으며 올라가는 불꽃들이 펑! 하는 소리와 함께 큼직하게 퍼진다. 퍼지는 불꽃은 한 두 개가 아니라, 한 눈에 다 담아지지도 않을 만큼 많고 넓은 불꽃의 향연이다.\n광안대교 앞에 떠있는 바지선에서 먼저, 광안대교에서 한 번 더, 그리고 광안대교 뒤쪽 넓은 바다에서 또 한 번 서로를 감싸주듯 쏟아지는 불꽃의 향연에 모두가 젖어든다.\n부산불꽃축제는 광안리 해수욕장에서만 즐길 수 있는 것은 아니다. 부산의 다양한 곳에서 또 다른 느낌으로 즐길 수 있다. 대표적인 장소로는 마린시티, 황령산 봉수대, 달맞이고개, 청사포 등이 있다. 사실 워낙 불꽃의 규모가 크다 보니 부산의 어지간한 높은 곳에서는 다 보이긴 하지만, 거리가 멀어질수록 당연히 불꽃의 일부만 보이고 펑펑 터지는 소리와 불꽃의 시간차가 길어지기 때문에 다소 역동감은 떨어질 수 있으니 기호와 상황에 따라 적절한 장소를 선택하도록 하자.\n\n밤바다와 밤하늘, 음악과 불꽃 그리고 사람들의 함성과 부산의 야경이 함께 만들어내는 아름다운 부산 가을밤의 하모니. 바로 부산불꽃축제다.',
    thumb: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191230180157336_thumbL',
    img: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191230180157336_ttiel',
  },
];

// 객체 분할 방식으로
function Festival({ id, title, subTitle, location, contents, img, thumb }) {
  return (
    <div className="festival">
      {/* <Link
        to={{
          pathname: '/festival-detail',
          state: { id, title, subTitle, location, contents, img, thumb },
        }}
      > */}
      <img src={thumb} alt={title} title={title} />
      <div className="festival-data">
        <h3 className="festival-title">{title}</h3>
        <h4 className="festival-subTitle">{subTitle}</h4>
        <h5 className="festival-location">{location}</h5>
        <p className="festival-contents">{contents.slice(0, 180)}...</p>
      </div>
      {/* </Link> */}
    </div>
  );
}

class App extends React.Component {
  state = {
    isLoading: true,
    festivals: festivals,
    count: 5,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  //id, title, subTitle, location, contents, img, thumb
  render() {
    const { isLoading, festivals } = this.state;
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          festivals.map((fes) => {
            return (
              <Festival
                key={fes.id}
                title={fes.title}
                subTitle={fes.subTitle}
                location={fes.location}
                contents={fes.contents}
                thumb={fes.thumb}
              />
            );
          })
        )}
      </div>
    );
  }
}

Festival.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default App;
