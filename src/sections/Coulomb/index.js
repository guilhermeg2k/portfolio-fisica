import { InlineMath} from 'react-katex';


export default function Coulomb() {
  return (
    <>
      <div className="slide">
        <div className="slideWrapper">
            <h1>Carga Elétrica</h1>
            <p>
            A força das interações elétricas de uma partícula depende da carga elétrica, que podeser positiva ou negativa. Cargas de mesmo sinal se repelem e cargas de sinais opostos se atraem. Umcorpo com quantidades iguais dos dois tipos de cargas está eletricamente neutro; um corpo com excessode cargas positivas ou negativas está eletricamente carregado.
            </p>
            <h3>Materiais condutores</h3>
            <p>
            São materiais nos quais muitas partículas eletricamente carregadas (elétrons, no caso dos metais) se movem com facilidade. Nos materiais isolantes, as cargas não têm liberdade parase mover. Corrente elétrica i é a taxa dq/dt com a qual a carga elétrica passa por um ponto ou região:
            </p>
            <p className="center math"><InlineMath math={"i = \\frac{dq}{dt}"} /></p>
            <h1>Lei de Coulomb</h1>
            <p>
            A lei de Coulomb expressa a força eletrostática entre duas partículas carregadas. Seas partículas têm cargas q1 e q2, elas estão separadas por uma distância r, e a distância entre elas não
            varia (ou varia lentamente); o módulo da força que uma das partículas exerce sobre a outra é dado por:
            </p>
            <p className="center math"><InlineMath math={"F = \\frac{1}{4 \\pi ε_0} \\frac{|q1||q2|}{r^2}"} /></p>
            <p>em que <InlineMath math={"ε_0" } /> = 8,85 * <InlineMath math={"10^{-12}  C^2/N  * m^2" } /> é a constante elétrica. O fator <InlineMath math={"1/4πε_0" } /> é frequentemente substituídopela constante eletrostática = <InlineMath math={"k = 8,99 × 10^9 N * m2/C2" } />.</p>
            <p>A força que uma partícula carregada exerce sobre outra partícula carregada tem a direção da retaque liga as duas partículas e aponta para a primeira partícula, se as partículas têm cargas de mesmo sinal,e aponta para longe da primeira partícula, se as partículas têm cargas de sinais opostos. Como acontececom  outros  tipos  de  forças,  se  uma  partícula  está  sujeita  a  mais  de  uma  força  eletrostática,  a  forçaresultante é a soma vetorial de todas as forças que agem sobre a partícula.</p>
            <p>Os dois teoremas das cascas da eletrostática são os seguintes:</p>
            <p>
            <b>Primeiro teorema das cascas:</b> Uma casca com uma distribuição uniforme de carga atrai ou repeleuma partícula carregada situada do lado de fora da casca como se toda a carga estivesse nocentro da casca. 
            </p>
            <p>
              <b>Segundo teorema das cascas:</b> Se uma partícula carregada está situada no interior de uma cascacom uma distribuição uniforme de carga, a casca não exerce nenhuma força eletrostática sobre apartícula.
            </p>
        </div>
      </div>
    </>
  )
}