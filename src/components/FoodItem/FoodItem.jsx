import "./FoodItem.css";
const FoodItem = (props) => {
  const itens = props.itens;
  return (
    <>
      {itens.map((item) => (
        <div
          key={item.dayInt}
          className="Container-item card mb-3 hvr-float"
        >
          <div
            className="card-header Font-white fs-4 Title-hover"
            style={{ backgroundColor: item.backgroundColor }}
          >
            {item.day}
          </div>
          <div className="card-body text-dark Adjust-center">
            {item.dayInt !== 5 && (
              <h5 className="card-title Hover">
                {item.meal} e {item.mistura}
              </h5>
            )}
            {item.dayInt === 5 && <h5 className="card-title"> Marmita</h5>}
          </div>
        </div>
      ))}
    </>
  );
};
export default FoodItem;
