import Sidebar from './components/Sidebar';
import {ContentContainer} from './App.style';

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <ContentContainer>
        {/* todo -- element behaviour is a little funky */}
        hello!
      </ContentContainer>
    </div>
  );
}

export default App;
