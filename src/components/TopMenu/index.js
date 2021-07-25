import "./style.css";

export default function TopMenu(){
  return (
    <div className="top-menu fixed">
      <ul>
        <li onClick={() => window.fullpageApi.moveTo(1)}>Inicio</li>
        <li onClick={() => window.fullpageApi.moveTo(2)}>Carga Elétrica</li>
        <li onClick={() => window.fullpageApi.moveTo(3)}>Campos Elétricos</li>
        <li onClick={() => window.fullpageApi.moveTo(4)}>Lei de Gauss</li>
        <li onClick={() => window.fullpageApi.moveTo(5)}>Potencial Elétrico</li>
        <li onClick={() => window.fullpageApi.moveTo(6)}>Capacitancia</li>
      </ul>
    </div>
  )
}