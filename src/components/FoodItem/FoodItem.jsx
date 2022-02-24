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
            className="card-header Font-white"
            style={{ backgroundColor: item.backgroundColor }}
          >
            {item.day}
          </div>
          <div className="card-body text-dark Adjust-center">
            <h5 className="card-title">{item.meal}</h5>
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
