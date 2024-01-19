import logo from './logo.svg';
import './App.css';
import TopAutoSlider from '../src/component/TopAutoSlider';
import AtlasEdgeOffer from './component/AtlasEdgeOffer';
import DubbleAutoSlider from './component/DubbleAutoSlider';
import ScrollingAnimation from './component/ScrollingAnimation';

function App() {
  return (
    <div className="App">
      <TopAutoSlider />
      <AtlasEdgeOffer />
      <DubbleAutoSlider />
      <ScrollingAnimation />
    </div>
  );
}

export default App;
