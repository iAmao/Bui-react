const xs = {
  gallery: ({ columnSize: { xs }, gutter = { x: 0, y: 10 } }) => ({
    gridTemplateColumns: `repeat(${xs}, auto)`,
    gridGap: `${gutter.y}px ${gutter.x}px`
  }),
  item:{
    height: 'auto !important'
  },
};
const sm = {
  gallery: ({ columnSize: { sm }, gutter = { x: 10, y: 10 } }) => ({
    gridTemplateColumns: `repeat(${sm}, auto)`,
    gridGap: `${gutter.y}px ${gutter.x}px`
  })
}

const md = {
  gallery: ({ columnSize: { md }, gutter = { x: 10, y: 10 } }) => ({
    gridTemplateColumns: `repeat(${md}, auto)`,
    gridGap: `${gutter.y}px ${gutter.x}px`
  })
}

const styles = {
  gallery: ({ columnSize: { lg }, gutter = { x: 10, y: 10 } }) => ({
    maxWidth: 960,
    display: 'grid',
    gridTemplateColumns: `repeat(${lg}, auto)`,
    gridGap: `${gutter.y}px ${gutter.x}px`
  }),
  item: ({ direction }) => ({
    marginTop: direction === 'column' ? 10 : 0,
    width: '100%',
    minHeight: direction === 'column' ? 150 : 200,
    height: direction === 'column' ? 'auto' : 200
  }),
  '@media (max-width: 576px)': xs,
  '@media (min-width: 576px) and (max-width: 768px)': sm,
  '@media (min-width: 768px) and (max-width: 1200px)': md
}

export default (props) => {
  return Object.keys(styles).reduce((acc, style) => {
    if (styles[style].constructor === Function) {
      acc[style] = styles[style](props);
    } else {
      acc[style] = styles[style]
    }
    return acc;
  }, {});
}
