import Product from "../assets/image-product-desktop.jpg";
import CartIcon from "../assets/icon-cart.svg";

function Card() {
  return (
    <div className="flex flex-row mx-w-m m-auto rounded-lg overflow-hidden w-3/6 bg-white ">
      <div className="wrapper-img w-1/2 h-[450px]">
        <img src={Product} alt="Sunset in the mountains"></img>
      </div>
      <div className="wrapper-content w-1/2 h-1/2 p-10">
        <div className="wrapper-category">
          <span className="text-gray-400 font-[montserrat] text-[14px] tracking-[0.5em]">
            PERFUME
          </span>
        </div>
        <div className="wrapper-title my-5 font-bold">
          <h1 className="text-4xl w-[250px] font-[fraunces]">
            Gabrielle Essence Eau De Parfum
          </h1>
        </div>
        <p className="text-[14px] text-gray-600 mb-5">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator For the House of CHANEL.
        </p>
        <div className="wrapper-price flex flex-row items-center">
          <h2
            className="text-4xl font-bold font-[fraunces]"
            style={{ color: "#3e8068" }}
          >
            $149.99
          </h2>
          <p className="ml-6 line-through text-gray-600 font-[montserrat]">
            $169.99
          </p>
        </div>
        <button className="flex items-center place-content-center bg-emerald-700 hover:bg-emerald-900 mt-8 text-white font-bold py-4 px- w-[280px] rounded-lg">
          <img src={CartIcon} className="mr-3" alt="" />
          <p className="font-[montserrat] text-[14px]">Add To Cart</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
