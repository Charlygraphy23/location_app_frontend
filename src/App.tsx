import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexRouter from 'routes';
import './styles/style.css';

function App() {
  return (
    <>
      <ToastContainer />
      <IndexRouter />
    </>
  );
}

export default App;
