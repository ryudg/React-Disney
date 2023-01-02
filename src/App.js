import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      {/* header + nav */}
      <Header />

      {/* 디즈니 대표 섹션 */}
      <Section title="Disney+" logo="logo-dp.png" bg="bg-dp.jpg" />

      {/* 디즈니 */}
      <Section title="Disney" logo="logo-d.png" bg="bg-d.jpg" />

      {/* 마블 */}
      <Section title="Marvel" logo="logo-m.png" bg="bg-m.jpg" />

      {/* 스타워즈 */}
      <Section title="Starwars" logo="logo-s.png" bg="bg-s.jpg" />

      {/* 네셔널지오그래픽 */}
      <Section title="NationalGeographic" logo="logo-ng.png" bg="bg-ng.jpg" />

      {/* 20세기 스튜디오 */}
      <Section title="20C" logo="logo-20.png" bg="bg-20.jpg" />
    </>
  );
}

export default App;
