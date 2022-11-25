import backgroundImg from './assets/meals-bckgrnd.jpeg';
import appIcon from './assets/food-delivery.png';
import cartIcon from './assets/shopping-cart.png';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="app-header">
        <div className="header-container">
          <div className="header-title">
            <img src={appIcon} alt="Ziggy Foods Icon" className="w-12" />
            <h1 className="hidden md:text-space md:block md:font-extrabold md:text-5xl">
              Ziggy<span className="italic text-3xl text-black">Foods</span>
            </h1>
            <h1 className="block text-3xl text-space underline md:hidden ">Z</h1>
          </div>
          <div className="px-4 py-2 flex justify-center items-center space-x-4 bg-tealDark rounded-full cursor-pointer">
            <img src={cartIcon} alt="Cart Icon" className="w-6" />
            <h3 className="hidden md:block md:text-space md:font-semibold md:text-xl">Your Cart</h3>
            <div className="justify-center items-center px-4 py-0 bg-purple rounded-full">
              <h2 className="text-space text-lg font-semibold">{0}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image-container">
        <img className="md:w-full object-cover" src={backgroundImg} alt="Food on table background image" />
      </div>
      <div className="min-h-screen bg-grey max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl m-auto relative flex justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-8 absolute -top-[22%]">
          <div className="text-space md:w-[50%] md:h-[22%] overflow-scroll bg-black rounded-lg flex flex-col space-y-6 items-center py-2 shadow-lg shadow-black">
            <h2 className="text-space text-2xl font-semibold">Delicious Food, Delivered to you</h2>
            <p className="px-4 text-center text-space">
              Order from your favorite restaurants & track on the go, with the all-new Ziggy Foods app.
            </p>
            <p className="px-4 text-center text-space">
              Order from your favorite restaurants & track on the go, with the all-new Ziggy Foods app.
            </p>
          </div>
          <div className="md:w-[70%] h-auto bg-space rounded-lg shadow-md">sdfsdfsdf</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
