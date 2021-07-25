import ReactFullpage from '@fullpage/react-fullpage';
import TopMenu from "./components/TopMenu";
import Coulomb from "./sections/Coulomb";
import CampoEletrico from './sections/CampoEletrico';
import PotencialEletrico from './sections/PotencialEletrico';
import LeiDeGauss from './sections/LeiDeGauss';
import Capacitancia from './sections/Capacitancia';
import 'katex/dist/katex.min.css';
import "./app.css";
import Inicio from './sections/Inicio';

function App() {
  return (
    <>
      <TopMenu />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={500}
        render={({ state, fullpageApi }) => {
          window.fullpageApi = fullpageApi;
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section background-1">
                  <Inicio/>
                </div>
                <div className="section background-2">
                  <Coulomb/>
                </div>
                <div className="section background-3">
                  <CampoEletrico/>
                </div>
                <div className="section background-4">
                  <LeiDeGauss/>
                </div>
                <div className="section background-5">
                  <PotencialEletrico/>
                </div>
                <div className="section background-6">
                  <Capacitancia/>
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
}

export default App;
