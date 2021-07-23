import "./style.css";

export default function TopMenu(){
  return (
    <div className="top-menu fixed">
      <ul>
        <li onClick={() => window.fullpageApi.moveTo(1)}>Carga Elétrica</li>
        <li onClick={() => window.fullpageApi.moveTo(2)}>Força Elétrica</li>
        <li onClick={() => window.fullpageApi.moveTo(3)}>Campo Elétrico</li>
        <li onClick={() => window.fullpageApi.moveTo(4)}>Dipolo Elétrico</li>
        <li></li>
      </ul>
    </div>
  )
}