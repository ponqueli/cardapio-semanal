import "./FoodItem.css";
const FoodItem = (props) => {
  const itens = props.itens;
  return (
    <>
      {itens.map((item) => (
        <div
          key={item.id}
          className="Container-item card mb-3 animate__animated animate__fadeInDown"
        >
          <div
            className="card-header Font-white fs-4"
            style={{ backgroundColor: item.backgroundColor }}
          >
            {item.day}
          </div>
          <div className="card-body text-dark Adjust-center">
            {item.dayInt !== 5 && 
              <h5 className="card-title">{item.meal } e { item.mistura}</h5>
            }
            {item.dayInt === 5 && 
              <h5 className="card-title"> Marmita</h5>
            }
            {/* <p className="card-text">
                arroz e feijão
            </p> */}
          </div>
        </div>
      ))}
    </>
  );
};
export default FoodItem;
