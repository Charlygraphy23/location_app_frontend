import CSS from 'csstype';
import LoaderDefault from 'react-loader-spinner';

type LoaderTypes = {
  style?: CSS.Properties;
};

const Loader = ({ style, ...props }: LoaderTypes) => {
  return (
    <div className='loader__default' style={style} {...props}>
      <LoaderDefault
        type='Circles'
        color='#8D3DAF'
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loader;
