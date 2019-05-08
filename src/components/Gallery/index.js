import React, { PureComponent } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import Radium from 'radium';
import PropTypes from 'prop-types';

import stylesheet from './style';
import { renderGridCell, injectPropWithStyle } from './util';

const getSize = width => {
  if (width <= 576) return "xs";
  else if (width > 576 && width <= 768) return "sm";
  return "lg";
};


class Gallery extends PureComponent {
  static defaultProps = {
    direction: 'row',
    columnSize: {
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3
    }
  };

  static propTypes = {
    items: PropTypes.array,
    renderCell: PropTypes.func,
    direction: PropTypes.oneOf(['column', 'row']),
    gutter: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    columnSize: PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number
    })
  };

  state = {
    items: [[]],
    columns: [[]],
    screenSize: null
  };



  componentDidMount() {
    if (this.props.direction === 'column') {
      this._observer = new ResizeObserver(entries => {
        const width = entries[0].contentRect.width;
        if (width > 0) {
          const screenSize = getSize(width);
          if (screenSize !== this.state.screenSize) {
            this.shapeItemColumns(screenSize);
          }
        }
      });

      this._observer.observe(this._gallery);
    }
  }

  componenntWillUnmount() {
    if (this.props.direction === 'column') {
      this._observer.disconnect();
    }
  }

  shapeItemColumns = (screenSize = null) => {
    let columns = [[]];
    if (screenSize === "sm") {
      columns = [[], []];
    } else if (screenSize === "lg") {
      columns = [[], [], []];
    }

    const items = this.props.items.reduce(
      (acc, item, index) => {
        acc[index % acc.length].push(item);
        return acc;
      },
      [...columns]
    );

    this.setState({ items, columns, screenSize });
  };

  renderColumnDirection = (style) => {
    const { renderCell = renderGridCell(style.item) } = this.props;

    return this.state.columns.map((col, index) => (
      <div style={style.itemCellColumn} key={`col-${index}`}>
        {this.state.items[index].map(item => renderCell(item))}
      </div>
    ));
  };

  renderRowDirection = (style) => {
    const { items, renderCell = renderGridCell(style.item) } = this.props;
    return items.map((item, index) => (
      <div key={`${index}-${item}`} style={style.itemCellRow}>
        {renderCell(item)}
      </div>
    ));
  }

  render() {
    const { direction } = this.props;
    const style = stylesheet(this.props);

    return (
      <div
        style={style.gallery}
        ref={ref => {
          this._gallery = ref;
        }}
      >
        {direction === 'column'
          ? this.renderColumnDirection(style)
          : this.renderRowDirection(style)
        }
      </div>
    );
  }
}

export default Radium(Gallery);
