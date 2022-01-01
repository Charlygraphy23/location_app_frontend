const PageLoader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '1090',
        background: 'rgba(0,0,0,0.4)',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
      }}
      className='d-flex justify-content-center align-items-center'
    >
      <div className='spinner-border text-info' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default PageLoader;
