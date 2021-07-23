import ReactFullpage from '@fullpage/react-fullpage';
import TopMenu from "./components/TopMenu";
import CargaEletrica from "./sections/CargaEletrico";
import CampoEletrico from './sections/CampoEletrico';
import DipoloEletrico from './sections/DipoloEletrico';
import ForcaEletrica from './sections/ForcaEletrica';
import "./app.css";

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
                  <CargaEletrica/>
                </div>
                <div className="section background-2">
                  <ForcaEletrica/>
                </div>
                <div className="section background-3">
                  <CampoEletrico/>
                </div>
                <div className="section background-4">
                  <DipoloEletrico/>
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
