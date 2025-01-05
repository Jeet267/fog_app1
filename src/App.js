
import MainContent from './components/Maincontent';
import Player from './components/Player';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="flex h-screen bg-black text-white">
    <Sidebar />
    <MainContent />
    <Player />
  </div>
  );
}

export default App;
