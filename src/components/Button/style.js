export default {
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