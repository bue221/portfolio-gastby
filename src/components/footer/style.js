const styles = ({ app, typography }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${typography.pxToRem(8)} auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
