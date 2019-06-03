export default {
  '@global': {
    '.fade-enter': {
      opacity: 0
    },
    '.fade-enter-active': {
      opacity: 1
    },
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0
    }
  },
  page: {
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    transition: 'opacity 0.5s ease-out'
  }
};
