import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import svg from '../assets/svg';


const Icon = ({ icon, size, style, ...props}) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: svg[icon]}}
      style={[styles.svg(style.color || '#333'), style]}
    />
  );
};

const styles = {
  svg: (color) => ({
    fill: color
  })
};

Icon.defaultProps = {
  size: 15,
  style: {}
};

Icon.propTypes = {
  /**
   * Size of the icon. the size will be the size in pixel of both height and width.
   */
  size: PropTypes.number,

  /**
   * Oaverride the default styling of the icon.
   */
  style: PropTypes.object,

  /**
   * The name of the icon. Must be one of the names in the above example.
   */
  icon: PropTypes.oneOf(Object.keys(svg)).isRequired
};

export default Radium(Icon);
