import React from 'react';
import Button from 'bui-react/Button';

/**
 * Button with custom styles
 */
export default () => {
  return (
    <Button
      rounded
      style={{
        width: 200,
        padding: 20,
        border: 'none',
        color: '#FFFFFF',
        backgroundColor: '#2b95f8',
      }}
    >
      Custom Button!
    </Button>
  );
}
