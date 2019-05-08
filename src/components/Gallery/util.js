import React from 'react';

export const renderGridCell = (style) => {
 return (item) => {
   return (
     <img alt="bui-gallery" src={item} style={style} />
   );
 };
};

export const injectPropWithStyle = (Component, stylesheet) => {
  return (props) => {
    console.log(props)
    const styles = stylesheet(props);
    console.log(stylesheet, styles)
    const gutter = { x: 10, y: 10 };
    const columnSize = { xs: 1, sm: 2, md: 2, g: 3 };
    return <Component
      gutter={gutter}
      columnSize={columnSize}
      {...props}
      styles={styles}
    />
  }
}
