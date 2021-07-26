import { InlineMath } from 'react-katex';

export default function CampoEletrico() {
  return (
    <>
      <div className="slide">
        <div className="slideWrapper">
          <h1>Campo Elétrico</h1>
          <p>Uma forma de explicar a força eletrostática entre duas cargas é supor que uma carga produz um campo elétrico no espaço em volta. A força eletrostática que age sobre uma das cargas é atribuída ao campo elétrico produzido pela outra carga na posição da primeira.</p>
          <h3>Definição de Campo Elétrico</h3>
          <p>O campo elétrico <InlineMath math={"\\vec{E}"} /> em qualquer ponto do espaço é definido em termos da força eletrostática  <InlineMath math={"\\vec{F}"} /> que seria exercida em uma carga de prova positiva <InlineMath math={"q_0"}/> colocada nesse ponto:</p>
          <p className="math center">
            <InlineMath math={"\\vec{E} = \\frac{\\vec{F}}{q_0}"} />
          </p>
          <h3>Linhas de Campo Elétrico</h3>
          <p>As linhas de campo elétrico são usadas para visualizar a orientação e a intensidade dos campos elétricos. O vetor campo elétrico em qualquer ponto do espaço é tangente à linha de campo elétrico que passa por esse ponto. A densidade de linhas de campo elétrico em uma região do espaço é proporcional ao módulo do campo elétrico nessa região. As linhas de campo elétrico começam em cargas positivas e terminam em cargas negativas.</p>
          <h3>Campo Produzido por uma Carga Pontual</h3>
          <p>O módulo do campo elétrico, produzido por uma carga pontual q a uma distância r da carga, é dado por</p>
          <p className="math center">
            <InlineMath math={"{E} = \\frac{1}{4 \\pi ε_0} \\frac{|q|}{r^2}"} />
          </p>
          <p>
            O sentido de <InlineMath math={"\\vec{E}"} /> é para longe da carga pontual, se a carga é positiva, e para perto da carga, se a carga é negativa.
          </p>
          <h3>
          Campo Produzido por um Dipolo Elétrico
          </h3>
          <p>Um dipolo elétrico é formado por duas partículas com cargas de mesmo valor absoluto q e sinais opostos, separadas por uma pequena distância d. O momento dipolar elétrico <InlineMath math={"\\vec{p}"}/> de um dipolo tem módulo qd e aponta da carga negativa para a carga positiva. O módulo do campo elétrico produzido por um dipolo em um ponto distante do eixo do dipolo (reta quepassa pelas duas cargas) é dado por:</p>
          <p className="math center">
            <InlineMath math={"{E} = \\frac{1}{2 \\pi ε_0} \\frac{p}{z^3}"} />
          </p>
          <p>em que z é a distância entre o ponto e o centro do dipolo.</p>
        </div>
      </div>
      <div className="slide">
        <div className="slideWrapper">
          <h3>Campo Produzido por uma Distribuição Contínua de Carga</h3>
          <p>O campo elétrico produzido por uma distribuição  contínua  de  carga  pode  ser  calculado  tratando  elementos  de  carga  como  cargas pontuais e somando, por integração, os campos elétricos produzidos por todos os elementos de carga.</p>
          <h3>Campo Produzido por um Disco Carregado</h3>
          <p>O módulo do campo elétrico em um ponto do eixo central de um disco uniformemente carregado é dado por:</p>
          <p className="math center">
          <InlineMath math={" E = \\frac{σ}{2ε_0} (1-\\frac{z}{\\sqrt{z^2+R^2}})"} />
          </p>
          <h3>Força  Exercida  por  um  Campo  Elétrico  Sobre  uma  Carga  Pontual</h3>
          <p>Quando  uma  carga pontual q é submetida a um campo elétrico externo <InlineMath math={"\\vec{E}"} /> produzido por outras cargas, a força eletrostática <InlineMath math={"\\vec{F}"} /> que age sobre a carga pontual é dada por:</p>
          <p className="math center">
            <InlineMath math={"\\vec{F} = q\\vec{E}"}/>
          </p>
          <p>A força <InlineMath math={"\\vec{f}"} /> tem o mesmo sentido que <InlineMath math={"\\vec{E}"} />, se a carga q for positiva, e o sentido oposto, se a carga for negativa.</p>
          <h3>Um Dipolo em um Campo Elétrico</h3>
          <p>Quando um dipolo elétrico de momento dipolar <InlineMath math={"\\vec{p}"} /> é submetidoa um campo elétrico <InlineMath math={"\\vec{E}"} />, o campo exerce sobre o dipolo um torque  <InlineMath math={"\\vec{τ}"} /> dado por:</p>
          <p className="math center">
            <InlineMath math={"\\vec{τ} = \\vec{p} \\times \\vec{E}"} />
          </p>
        </div>
      </div>
    </>
  )
}