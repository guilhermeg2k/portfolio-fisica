import { InlineMath } from 'react-katex';

export default function Capacitancia() {
  return (
    <>
      <div className="slide">
        <div className="slideWrapper">
          <h1>Capacitor; Capacitância</h1>
          <p>Um capacitor é formado por dois condutores isolados (as placas) com cargas +q e −q. A capacitância C de um capacitor é definida pela equação</p>
          <p className="math center">
            <InlineMath math={"q = CV"} />
          </p>
          <p>em que V é a diferença de potencial entre as placas.</p>
          <h3>Cálculo da Capacitância</h3>
          <p>Podemos calcular a capacitância de um capacitor (1) supondo que uma carga q  foi  colocada  nas  placas, (2)  calculando  o  campo  elétrico <InlineMath math={"\\vec{E}"} /> produzido  por  essa  carga, (3) calculando a diferença de potencial V entre as placas e (4) calculando o valor de C com o auxílio da anterior. Seguem alguns resultados particulares. A capacitância de um capacitor de placas paralelas de área A separadas por uma distância d é dada por</p>
          <p className="math center">
            <InlineMath math={"C = \\frac{ε_0A}{d}"} />
          </p>
          <p>A  capacitância  de  um capacitor  cilíndrico  formado  por  dois  cilindros  longos  coaxiais  de comprimento L e raios a e b é dada por</p>
          <p className="math center">
            <InlineMath math={"C = 2\\piε_0\\frac{L}{ln(b/a)}"} />
          </p>
          <p>A capacitância de um capacitor esférico formado por duas cascas esféricas concêntricas de raios ae b é dada por</p>
          <p className="math center">
            <InlineMath math={"C = 4\\piε_0\\frac{ab}{b-a}"} />
          </p>
          <p>A capacitância de uma esfera isolada de raio R é dada por</p>
          <p className="math center">
            <InlineMath math={"C = 4\\piε_0R"} />
          </p>
          <h3>Capacitores  em  Paralelo  e  em  Série</h3>
          <p>As capacitâncias equivalentes <InlineMath math={"C_{eq}"} />  de  combinações  de capacitores em paralelo e em série podem ser calculadas usando as expressões</p>
          <p className="math center">
            <InlineMath math={"C_{eq} = \\sum_{j=1}^{n}C_j"} /> &nbsp; (n capacitadores em paralelo)
          </p>
          e
          <p className="math center">
            <InlineMath math={"\\frac{1}{C_{eq}} = \\sum_{j=1}^{n}C_j"} /> &nbsp; (n capacitadores em série)
          </p>
          <p>As  capacitâncias  equivalentes  podem  ser  usadas  para  calcular  as  capacitâncias  de  combinações  de capacitores em série e em paralelo.</p>

        </div>
      </div>
      <div className="slide">
        <div className="slideWrapper">
          <h3>Energia Potencial e Densidade de Energia</h3>
          <p>A energia potencial elétrica U  de  um  capacitor carregado,</p>
          <p className="math center">
            <InlineMath math={"U = \\frac{q^2}{2C} = \\frac{1}{2}CV^2"} />
          </p>
          <p>é igual ao trabalho necessário para carregar o capacitor. Essa energia pode ser associada ao campo elétrico <InlineMath math={"\\vec{E}"}/> criado pelo capacitor no espaço entre as placas. Por extensão, podemos associar qualquer campo elétrico a uma energia armazenada. No vácuo, a densidade de energia u, ou energia potencial por unidade de volume, associada a um campo elétrico de módulo E é dada por</p>
          <p className="math center">
            <InlineMath math={"u = \\frac{1}{2}ε_0E^2"} />
          </p>
          <h3>Capacitância  com  um  Dielétrico</h3>
          <p> Se  o  espaço  entre  as  placas  de  um  capacitor  é  totalmente preenchido por um material dielétrico, a capacitância C é multiplicada por um fator κ, conhecido como constante dielétrica, que varia de material para material. Em uma região totalmente preenchida por um material dielétrico de constante dielétrica κ, a constante elétrica <InlineMath math={"ε_0"}/> deve ser substituída por <InlineMath math={"kε_0"}/> em todas as equações. Os efeitos da presença de um dielétrico podem ser explicados em termos da ação de um campo elétrico sobre os dipolos elétricos permanentes ou induzidos no dielétrico. O resultado é a formação decargas induzidas nas superfícies do dielétrico. Essas cargas tornam o campo, no interior do dielétrico, menor do que o campo que seria produzido na mesma região pelas cargas livres das placas do capacitorse o dielétrico não estivesse presente.</p>
          <h3>Lei de Gauss com um Dielétrico</h3>
          <p>Na presença de um dielétrico, a lei de Gauss assume a seguinte forma:</p>
          <p className="math center">
            <InlineMath math={"ε_0 \\oint k\\vec{E} * d\\vec{A} = q"} />
          </p>
          <p>em que q é a carga livre. O efeito das cargas induzidas no dielétrico é levado em conta pela inclusão na integral da constante dielétrica κ.</p>
        </div>
      </div>
    </>
  )
}