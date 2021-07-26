import { InlineMath } from 'react-katex';

export default function LeiDeGauss() {
  return (
    <>
      <div className="slide">
        <div className="slideWrapper">
          <h1>Lei de Gauss</h1>
          <p>A lei de Gauss e a lei de Coulomb são formas diferentes de descrever a relação entre carga e campo elétrico em situações estáticas. A lei de Gauss é expressa pela equação</p>
          <p className="math center">
            <InlineMath math={"E_0 \\Phi = q_{env}"} />
          </p>
          <p>em que <InlineMath math={"q_{env}"} /> é a carga total no interior de uma superfície imaginária fechada (conhecida como superfície gaussiana) e Φ é o fluxo total do campo elétrico através da superfície:</p>
          <p className="math center">
            <InlineMath math={"\\Phi = \\oint \\vec{E} * d\\vec{A}"} />
          </p>
          <p>A lei de Coulomb pode ser demonstrada a partir da lei de Gauss.</p>
          <h2>Aplicações da Lei de Gauss</h2>
          <p>Usando a lei de Gauss e, em alguns casos, princípios de simetria, é possível  demonstrar  várias  propriedades  importantes  de  sistemas  eletrostáticos,  entre  as  quais  as seguintes:</p>
          <ul className="bulletList">
            <li>As cargas em excesso de um condutor estão concentradas na superfície externa do condutor.</li>
            <li>
              <p>O campo elétrico externo nas vizinhanças da superfície de um condutor carregado é perpendicular à superfície e tem um módulo dado por</p>
              <p className="math center">
                <InlineMath math={"E = \\frac{\\sigma}{ε_0}"} />
              </p>
              <p>em que σ é a densidade superficial de carga.</p>
              <p>No interior do condutor, E = 0.</p>
            </li>
            <li>
              O campo elétrico produzido em um ponto do espaço por uma linha de carga infinita com densidade linear de carga uniforme λ é perpendicular à linha de carga e tem um módulo dado por
              <p className="math center">
                <InlineMath math={"E = \\frac{\\lambda}{2\\piε_0r}"} />
              </p>
              <p>em que r é a distância entre o ponto e a linha de carga.</p>
            </li>
            <li>
              O campo elétrico produzido por uma placa isolante infinita  com  densidade  superficial  de  carga uniforme σ é perpendicular ao plano da placa e tem um módulo dado por
              <p className="math center">
                <InlineMath math={"E = \\frac{\\sigma}{2ε_0}"} />
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="slide">
        <div className="slideWrapper">
          <ul className="bulletList">
            <li>
              O campo elétrico em um ponto do lado de fora de uma casca esférica uniformemente carregada, de raio R e carga total q, aponta na direção radial e tem um módulo dado por
              <p className="math center">
                <InlineMath math={"E = \\frac{1}{4\\piε_0}\\frac{q}{r^2}"} />
              </p>
              <p>em que r é a distância entre o ponto e o centro da casca. (A carga se comporta, para pontos externos, como  se  estivesse  concentrada  no  centro  da  esfera.)  O  campo do lado de dentro  de  uma  casca esférica uniformemente carregada é zero:</p>
              <p>E = 0</p>
            </li>
            <li>
              O  campo  elétrico  em  um  ponto no  interior  de  uma  esfera  uniformemente  carregada  aponta  na direção radial e tem um módulo dado por
              <p className="math center">
                <InlineMath math={"E = \\frac{q}{4\\piε_0R^3}"} />
              </p>
              <p>em que q é a carga da esfera, R é o raio da esfera e r é a distância entre o ponto e o centro da casca.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}