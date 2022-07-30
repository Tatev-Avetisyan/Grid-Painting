import './App.css';
import Test from './component/Test';
import ColorProvider from './store/provider';

function App() {

  return (
    <div className="App">
     <ColorProvider>
      <Test />
     </ColorProvider>
    </div>
  );
}

export default App;
