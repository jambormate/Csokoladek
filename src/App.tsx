import Fejlec from "./assets/Fejlec"
import Lablec from "./assets/Lablec"
import ChocolateCard from "./assets/ChocolateCard"
import "./assets/csokiformazas.css"

function App() {
  return (
    <>
      {Fejlec()}
      <main id="csoki-lista">
        <table className="chocolate-card">
          <thead>
            <tr>
              <th>Név</th>
              <th>Márka</th>
              <th>Étcsoki?</th>
              <th>Kakaótartalom</th>
              <th>Alapanyagok</th>
              <th>Csoki fajta</th>
            </tr>
          </thead>

          <tbody>
            <ChocolateCard
              name="Étcsoki 70%"
              brand="Lindt"
              isDark={true}
              cocoaPercentage={70}
              ingredients={["kakaómassza", "cukor", "kakaóvaj"]}
            />

            <ChocolateCard
              name="Tejcsoki mogyoróval"
              brand="Milka"
              isDark={false}
              cocoaPercentage={30}
              ingredients={["cukor", "tejpor", "kakaóvaj", "mogyoró"]}
            />

            <ChocolateCard
              name="Fehércsoki epres"
              brand="Nestlé"
              isDark={false}
              cocoaPercentage={25}
              ingredients={["cukor", "tejpor", "kakaóvaj", "eperdarabok"]}
            />
          </tbody>
        </table>
      </main>
      {Lablec()}
    </>
  )
}
export default App
