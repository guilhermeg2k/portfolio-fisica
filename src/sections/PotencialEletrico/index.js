import { InlineMath } from 'react-katex';

export default function PotencialEletrico() {
  return (
    <>
      <div className="slide">
        <div className="slideWrapper">
          <h1>Potencial Elétrico</h1>
          <p>O potencial elétrico V em um ponto P onde existe um campo elétrico produzido por um objeto carregado é dado por:</p>
          <p className="math center">
          <InlineMath math={"V = \\frac{-W_∞}{q_0} = \\frac{U}{q_0}"} />
          </p>
          <p>em que <InlineMath math={"-W_∞"} /> é o trabalho que seria realizado por uma força elétrica sobre uma carga de prova positiva <InlineMath math={"q_0"} /> para deslocá-la de uma distância infinita até o ponto P, e U é a energia potencial do sistema carga de prova-objeto carregado na configuração final.</p>
          <h3>Energia Potencial Elétrica</h3>
          <p>Se uma partícula de carga q é colocada em um ponto no qual a energia potencial produzida por um objeto carregado é V, a energia potencial elétrica U do sistema partícula-objeto é dada por</p>
          <p className="math center">
            <InlineMath math={"U = qV"} />
          </p>
          <p>Se uma partícula atravessa uma região onde existe uma diferença de potencial ∆V, a variação da energia potencial elétrica é dada por</p>
          <p className="math center">
            <InlineMath math={"ΔU = qΔV = q(V_f - V_i)"} />
          </p>
          <h3>Energia  Cinética</h3>
          <p>De  acordo  com  a  lei  de  conservação  da  energia  mecânica,  se  uma  partícula atravessa uma região onde existe uma variação ΔV da energia potencial elétrica sem ser submetida a umaforça externa, a variação da energia cinética da partícula é dada por</p>
          <p className="math center"><InlineMath math={"ΔK = -qΔV"} /></p>
          <p>Se a partícula atravessa uma região onde existe uma variação ΔV da energia potencial elétrica enquanto é submetida a uma força externa que exerce um trabalho <InlineMath math={"W_{ext}"} />  sobre  a  partícula,  a  variação  da  energia cinética da partícula é dada por:</p>
          <p className="math center">
            <InlineMath math={"ΔK = -qΔV + W_{ext}"} />
          </p>
          <p>No caso especial em que ΔK =  0, o  trabalho  de uma  força externa  envolve  apenas o  movimento  da partícula na presença de uma diferença de potencial:</p>
          <p className= "math center"><InlineMath math={"W_{ext} = qΔV"} /> ( para&nbsp;<InlineMath math={"K_i = K_f"} />)</p>
        </div>
      </div>
      <div className="slide">
        <div className="slideWrapper">
          <h3>Superfícies Equipotenciais</h3>
          <p>Os pontos que pertencem a uma superfície equipotencial possuem o mesmo  potencial  elétrico.  O  trabalho  realizado  sobre  uma  carga  de  prova  para  deslocá-la  de  uma superfície  equipotencial  para  outra  não  depende  da  localização  dos  pontos  inicial  e  final  nem  da trajetória  entre  os  pontos.  O  campo  elétrico <InlineMath math={"\\vec{E}"} />  é  sempre  perpendicular  à  superfície  equipotencial correspondente.</p>
          <h3>Cálculo de V a Partir de <InlineMath math={"\\vec{E}"} /></h3>
          <p>A diferença de potencial elétrico entre dois pontos i e f é dada por</p>
          <p className="math center">
            <InlineMath math={"V_f - V_i = -\\int_i^f \\vec{E} d\\vec{s}"} />
          </p>
          <p>em que a integral é calculada ao longo de qualquer trajetória que comece no ponto i e termine no ponto f. Se tomamos como referência o potencial <InlineMath math={"V_i = 0"} />, o potencial em um ponto qualquer é dado por</p>
          <p className="math center">
            <InlineMath math={"V = -\\int_i^f \\vec{E} d\\vec{s}"} />
          </p>
          <p>No caso especial de um campo uniforme de módulo E, a diferença de potencial entre dois planos equipotenciais vizinhos (paralelos) separados por uma distância Δx é dada por</p>
          <p className="math center"><InlineMath math={"ΔV = -EΔx"} /></p>
          <h3>Potencial Produzido por uma Partícula Carregada</h3>
          <p>O  potencial  elétrico  produzido  por  uma partícula carregada a uma distância r da partícula é dado por</p>
          <p className="math center"><InlineMath math={"V = \\frac{1}{4\\piε_0}\\frac{q}{r}"} /></p>
          <p>em que V tem o mesmo sinal de q. O potencial produzido por um conjunto de cargas pontuais é dado por</p>
          <p className="math center"><InlineMath math={"V = \\sum_{i=1}^{n}V_i =  \\frac{1}{4\\piε_0} \\sum_{i=1}^{n} \\frac{q_i}{r_i}"} /></p>
          <h3>Potencial Produzido por um Dipolo Elétrico</h3>
          <p>A uma distância r de um dipolo elétrico com um momento dipolar elétrico p = qd, o potencial elétrico do dipolo é dado por</p>
          <p className="math center"><InlineMath math={"V = \\frac{1}{4\\piε_0} \\frac{p \\cos θ}{r^2}"} /></p>
        </div>
      </div>
      <div className="slide">
        <div className="slideWrapper">
          <h3>Potencial Produzido por uma Distribuição Contínua de Carga</h3>
          <p>No caso de uma distribuição contínua de carga, a Eq. se torna</p>
          <p className="math center"><InlineMath math={"V = \\frac{1}{4\\piε_0} \\int \\frac{dq}{r}"} /></p>
          <p>em que a integral é calculada para toda a distribuição</p>
          <h3>Cálculo de <InlineMath math={"\\vec{E}"} /> a Partir de V</h3>
          <p>A  componente  de <InlineMath math={"\\vec{E}"} /> em  qualquer  direção  é  o  negativo  da  taxa  de variação do potencial com a distância na direção considerada:</p>
          <p className="math center"><InlineMath math={"E_s = -\\frac{δV}{δs}"} /></p>
          <p>As componentes x, y e z de <InlineMath math={"\\vec{E}"} /> são dadas por</p>
          <p className="math center"><InlineMath math={"E_x = -\\frac{δV}{δx}; E_y = -\\frac{δV}{δy}; E_z = -\\frac{δV}{δz};"} /></p>
          <p>Se <InlineMath math={"\\vec{E}"} /> é uniforme, a Equação é reduzida a</p>
          <p className="math center"><InlineMath math={"E_x = -\\frac{ΔV}{Δs}"} /></p>
          <p>em que s é a direção perpendicular às superfícies equipotenciais.</p>
          <h3>Energia Potencial Elétrica de um Sistema de Partículas Carregadas</h3>
          <p>A energia potencial elétrica de um sistema de partículas carregadas é igual ao trabalho necessário para montar o sistema comas cargas inicialmente em repouso e a uma distância infinita umas das outras. Para duas cargas separadas por uma distância r,</p>
          <p className="math center"><InlineMath math={"U = W = \\frac{1}{4\\piε_0}\\frac{q_1q_2}{r}"} /></p>
          <h3>Potencial de um Condutor Carregado</h3>
          <p>Em equilíbrio, toda a carga em excesso de um condutor está concentrada na superfície externa do condutor. A carga se distribui de tal forma que (1) o potencial é o mesmo em todos os pontos do condutor; (2) o campo elétrico é zero em todos os pontos do condutor, mesmo na presença de um campo elétrico externo; (3) o campo elétrico em todos os pontos da superfície é perpendicular à superfície.</p>
        </div>
      </div>
    </>
  )
}