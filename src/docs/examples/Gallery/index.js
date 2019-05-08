import React from 'react';
import Gallery from 'bui-react/Gallery';

const photos = [
  "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
];

const detailPhoto = [
  { title: 'Germany', photo: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'},
  { title: 'Turkey', photo: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'},
  { title: 'Mali', photo: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'}
]


const FlashCard = (props) => {
  const style = {
    card: {
      position: 'relative',
      height: 200,
      backgroundColor: '#222',
      borderRadius: 7,
      cursor: 'pointer'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      opacity: .7,
    },
    img: {
      width: '100%',
      height: '100%',
      borderRadius: 7,
    },
    cardName: {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: '2em',
      overflow: 'scroll',
    },
    strong: {
      color: '#FFF',
      width: '100%',
      overflowWrap: 'break-word'
    }
  }

  return (
    <div style={style.card}>
      <div style={style.cardImage}>
        <img src={props.image} alt={props.title} style={style.img} />
      </div>
      <div style={style.cardName}>
        <strong style={style.strong}>{props.title}</strong>
      </div>
    </div>
  )
}

export default () => {
  return (
    <div id="bui-react-docs-gallery-container">
      <h4>Row Gallery</h4>
      <Gallery items={photos} />
      <hr/>
      <h4>Column Gallery</h4>
      <Gallery items={photos} direction="column" />
      <hr/>
      <h4>Custom Cell Gallery</h4>
      <Gallery
        items={detailPhoto}
        direction="column"
        renderCell={(item) => {
          return <FlashCard title={item.title} image={item.photo} />
        }}
      />
    </div>
  );
}
