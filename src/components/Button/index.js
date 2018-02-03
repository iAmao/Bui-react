import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Icon from 'bui-react/Icon';

/**
 * Button Component
 */
function Button({
  icon,
  link,
  type,
  text,
  style,
  rounded,
  children,
  iconStyle,
  iconPosition,
  iconWrapperStyle,
  ...props
}) {
    const combineProps = {
      ...props,
      style:[
        styles.base,
        styles[type],
        rounded ?
          styles['rounded'](typeof rounded === 'boolean' ? null : rounded)
          :
          styles['block'],
        style
      ]
    };

    const child = (
      <span>
        {text ? text : children}
        {
          icon
            &&
            iconPosition === 'right'
              &&
              <span style={[styles.iconContainer, iconWrapperStyle ]}>
                <Icon size={20} icon={icon} style={iconStyle}  />
              </span>
        }
      </span>
    );


    if (link) {
      return (
        <a {...combineProps}>
          {child}
        </a>
      );
    }

    return (
        <button {...combineProps}>
          {child}
        </button>
    );
}

const styles = {
  base: {
      padding: 10,
      fontSize: 18,
      minWidth: 150,
      cursor: 'pointer',
      position: 'relative',
      textDecoration: 'none',
      border: '1px solid #333'
  },
  primary: {
    color: '#333',
    backgroundColor: '#FFF'
  },
  secondary: {
    color: '#FFF',
    backgroundColor: '#333'
  },
  rounded: (size) => {
    return {
      borderRadius: size || 60
    };
  },
  block: {
    borderRadius: 0
  },
  iconContainer: {
    margin: '0 0 0 10px'
  }
};


Button.defaultProps = {
  style: {},
  rounded: false,
  type: 'primary',
  iconPosition: 'right'
};


Button.propTypes = {
  /**
   * Specifies if the button can and should act as
   * an anchor. If set to true, then the component
   * will have the same properties of the <i><</i>a<i></i>> tag
   */
  link: PropTypes.bool,
  icon: PropTypes.string,

  /**
   * Content to be displayed inside the button.
   */
  text: PropTypes.string,

  /**
   * This prop can be used to override the default styling of this button component.
   */
  style: PropTypes.object,

  /**
   * Callback function fired when the button is clicked.
   * <br/>
   * <pre>
   *   <code>
   *      function(event: object): void
   *   </code>
   *   <i>event</i>: Click event targeting the button.
   * </pre>
   */
  onClick: PropTypes.func,

  /**
   * Override default styling of the icon.
   */
  iconStyle: PropTypes.object,

  /**
   * Override the default style of the wrapper around the icon.
   */
  iconWrapperStyle: PropTypes.object,

  /**
   * Position of the icon, either <i>"right"</i> or <i>"left"</i>
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Can be a "number" or "boolean". If boolean and true,
   * the border radius is set to 60.
   * If a number is specified,
   * then the border radius will use that number.
   */
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),

  /**
   * Element to be displayed inside the button.
   * If text is defined, then the button will use the value of text
   * in the button over children. But, otherwise, children will be
   * displayed.
   */
  children: PropTypes.node,
  
  /**
   * The type of the button.
   * Can be one of "primary", "secondary"
   */
  type: PropTypes.oneOf(['primary', 'secondary'])
};

export default Radium(Button);
