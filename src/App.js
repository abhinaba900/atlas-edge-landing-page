import logo from './logo.svg';
import './App.css';
import TopAutoSlider from '../src/component/TopAutoSlider';
import AtlasEdgeOffer from './component/AtlasEdgeOffer';
import DubbleAutoSlider from './component/DubbleAutoSlider';
import ScrollingAnimation from './component/ScrollingAnimation';
import ClickbleSection from './component/ClickbleSection';
import WelcomToAtlusEdge from './component/WelcomToAtlusEdge';

function App() {
  return (
    <div className="App">
      <TopAutoSlider />
      <AtlasEdgeOffer />
      <DubbleAutoSlider />
      <ScrollingAnimation />
      <ClickbleSection />
      <ScrollingAnimation />
      <WelcomToAtlusEdge />
      <ScrollingAnimation />
    </div>
  );
}

export default App;
