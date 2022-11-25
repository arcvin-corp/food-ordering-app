import backgroundImg from './assets/meals-bckgrnd.jpeg';
import appIcon from './assets/food-delivery.png';

function App() {
  return (
    <div className="app-header">
      <div className="header-container">
        <div className="header-title">
          <img src={appIcon} alt="" className="w-12" />
          <h1 className="text-space font-extrabold text-5xl">
            Ziggy<span className="italic text-3xl text-black">Foods</span>
          </h1>
        </div>
        <div className="cart-header px-8">
          <img src="" alt="" />
          <h3>Your Cart</h3>
          <div className="cart-counter"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
