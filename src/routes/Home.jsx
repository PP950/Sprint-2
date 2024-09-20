import { HomeStyle } from '../css/HomeStyle'
import { WiThermometer } from "react-icons/wi";
import { IoSpeedometer } from "react-icons/io5";
import { IoBatteryChargingSharp } from "react-icons/io5";
import interior from '../assets/interior_formula.webp'
import carro_1 from '../assets/carro_1.png'
import carro_3 from '../assets/carro_3.png'
import motor from '../assets/motor.jpg'





const Home=()=>{
    return(
        <HomeStyle>
        <main>
      <section className="formula1">
        <div>
          <img
            className="formula"
            src={carro_3}
            alt="formula1"
            width="658"
            height="379"
          />
          <div className="info">
          <WiThermometer/>
            <p>Temperatura<br />24ºC</p>
          <IoSpeedometer />
            <p>Velocidade<br />320 Km/h</p>
          <IoBatteryChargingSharp />
            <p>Bateria<br />91%</p>
          </div>
        </div>
      </section>

      <section className="problema">
        <div>
          <img
            src = {interior}
            alt="Interior formula E"
            width="544px"
            height="345"
          />
          <p>Contextualização do problema:</p>
          <span>
            Estamos desenvolvendo junto com a equipe de automobilismo Tech Mahindra algumas estratégias de como aumentar a popularidade da Fórmula E. Para isso, decidimos analisar a dor dos possíveis telespectadores e encontrar soluções viáveis para atrair o interesse das pessoas sobre essa modalidade que tem crescido no mundo das corridas.
          </span>
          <button>Saiba mais</button>
        </div>
      </section>

      <section className="solucao">
        <div>
          <img
            src={carro_1}
            alt="Formula E Mahindra"
            width="735px"
            height="368"
          />
          <p>Soluções</p>
          <span>
            • Aparelhos para simular o som: Utilizando o aprendizado em Arduino para criar um dispositivo que simule o som dos carros de Fórmula movidos por combustível fóssil, atraindo consumidores de automobilismo que gostam desse som.<br />
            • Site sobre a Fórmula E: Desenvolver um site em HTML com informações sobre a Fórmula E, incluindo links para sites que transmitem essa modalidade, como a Band, que requer uma conta para assistir à transmissão ao vivo.<br />
            • Vantagens dos carros elétricos: Mostrar dados sobre o impacto ambiental negativo dos carros movidos a combustível fóssil em comparação com os carros elétricos.
          </span>
          <button>Saiba mais</button>
        </div>
      </section>

      <section className="comparacao">
        <div>
          <img
           src = {motor}
            alt="Motor formula E"
            width="544"
            height="363"
          />
          <p>Comparação</p>
          <p>Impactos Negativos:</p>
          <span>
            • Baixa visibilidade: A falta de transmissão em TV aberta limita a visibilidade da Fórmula E.<br />
            • Silêncio dos Carros: A falta de ruído dos carros elétricos pode diminuir a emoção das corridas para os espectadores que apreciam o som dos motores.<br />
            • Preconceito com carros elétricos: Ainda há resistência quanto aos novos carros não movidos por combustível fóssil, dificultando a aceitação pelo público em geral.
          </span>
          <p>Impactos Positivos:</p>
          <span>
            • Aumento da visibilidade: Um site pode promover maior divulgação online, atraindo novos telespectadores.<br />
            • Dispositivos de som: A implementação de simuladores de som pode atrair mais espectadores e aumentar a popularidade do esporte.<br />
            • Conscientização ambiental: Apresentar as vantagens dos carros elétricos, como a redução da emissão de carbono, pode ajudar a melhorar a percepção pública e aumentar o interesse pela Fórmula E.
          </span>
          <button>Saiba mais</button>
        </div>
      </section>
    </main>
        </HomeStyle>
    )
}
export default Home