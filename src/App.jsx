import { useState, useEffect } from "react";
import FoodItem from "./components/FoodItem/FoodItem";
import logo from "./food.svg";
import "./App.css";

function App() {
  const [emptyList, setEmptyList] = useState(false);
  const [itens, setItens] = useState([]);

  const meals = [
    {
      id: 0,
      meal: "Ovo frito",
    },
    {
      id: 1,
      meal: "Lasanha de presunto e queijo",
    },
    {
      id: 2,
      meal: "Lasanha de Carne",
    },
    {
      id: 3,
      meal: "Bife",
    },
    {
      id: 4,
      meal: "Bife a cavalo",
    },
    {
      id: 5,
      meal: "Almôndegas",
    },
    {
      id: 6,
      meal: "Almôndegas ao molho sugo",
    },
    {
      id: 7,
      meal: "Bife de frango",
    },
    {
      id: 8,
      meal: "Bife de frango com molho de queijo",
    },
    {
      id: 9,
      meal: "Filé de frango frito empanado",
    },
    {
      id: 10,
      meal: "Hambúrguer",
    },
    {
      id: 11,
      meal: "Parmegiana de Frango",
    },
    {
      id: 12,
      meal: "Parmegiana de Carne",
    },
    {
      id: 13,
      meal: "Strogonoff de carne",
    },
    {
      id: 14,
      meal: "Strogonoff de Frango",
    },
    {
      id: 15,
      meal: "Carne moída",
    },
    {
      id: 16,
      meal: "Carne moída com pimenta cambucci",
    },
    {
      id: 17,
      meal: "Couve flor gratinada",
    },
    {
      id: 18,
      meal: "Frango assado (coxa/sobrecoxa)",
    },
    {
      id: 19,
      meal: "Peixe frito",
    },
    {
      id: 20,
      meal: "Batata frita",
    },
    {
      id: 21,
      meal: "Couve Flor com Bacon",
    },
    {
      id: 22,
      meal: "Yakissoba",
    },
  ];

  const mealsToShow = [];

  useEffect(() => {
    generateRandomOptions();
  }, []);

  function generateAleatoryNumber(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
  }

  function getDayOfWeek(day) {
    if (day === 1) return "Segunda";
    else if (day === 2) return "Terça";
    else if (day === 3) return "Quarta";
    else if (day === 4) return "Quinta";
    else if (day === 5) return "Sexta";
    else if (day === 6) return "Sábado";
    else if (day === 7) return "Domingo";
  }

  function getBackgroundColor(day) {
    if (day === 5) return "#081159";
    return "#BF0404";
  }

  function generateRandomOptions() {
    let qtdDays = 1;
    while (qtdDays !== 8) {
      let aleatoryNumber = generateAleatoryNumber(0, meals.length - 1);
      const itemFound = meals[aleatoryNumber];

      if (
        mealsToShow.length === 0 ||
        !mealsToShow.some((item) => item.id === aleatoryNumber)
      ) {
        let itemWithDay = Object.assign({}, itemFound, {
          day: getDayOfWeek(qtdDays),
          backgroundColor: getBackgroundColor(qtdDays),
          meal: qtdDays === 5 ? "Marmita" : meals[aleatoryNumber].meal,
        });
        mealsToShow.push(itemWithDay);
        qtdDays++;
      }
    }
    setItens(mealsToShow);
  }

  return (
    <div className="App Relative">
      <div className="App-header">
        <img
          src={logo}
          className="App-logo animate__animated animate__zoomInDown"
          alt="logo"
        />
        <h1 className="Title animate__animated animate__rubberBand">
          Cardápio Semanal
        </h1>
        <div className="d-grid gap-1 col-3 mx-auto">
          <button
            type="button"
            className="btn-lg btn btn-primary Button-generate animate__animated animate__shakeX"
            onClick={generateRandomOptions}
          >
            Gerar 👆🏼
          </button>
        </div>
      </div>
      <div className="App-body">
        {!emptyList && <FoodItem itens={itens} />}

        {emptyList && (
          <div className="Links-food Empty-text Absulute-center">
            <h2 className="">Sua lista está vazia...</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
