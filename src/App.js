import './App.css';
import { ReactSearch } from "@vectara/react-search";
// import { BubbleChat } from 'flowise-embed/dist/web.js';



function App() {
  return (
    <div className="App">
      <div className="search-container">
      <ReactSearch
        customerId="1519431600" // should be copied from our vectara project
        corpusId="3" // should be copied from our vectara project
        apiKey="zqt_WpCvsNuWBuIc2xI9ftj177jgPEuwp7EJtkGAOA" // should be copied from our vectara project
        placeholder="Search for anything" // Optional search input placeholder
        isDeepLinkable={true} // Optional boolean determining if search results will be deep-linked
        className="ReactSearch"
      />
      </div>


      {/* <BubbleChat chatflowid="c82e4b7a-53cb-4dc1-86fd-228f8ecaa4c6" apiHost="http://localhost:3000" /> */}
    </div>
  );
}

export default App;

