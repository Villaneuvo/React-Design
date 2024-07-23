import ProductDesktop from "../assets/image-product-desktop.jpg";
import ProductMobile from "../assets/image-product-mobile.jpg";
import CartIcon from "../assets/icon-cart.svg";

function Card() {
  return (
    <div className="grid w-fit max-w-sm overflow-hidden rounded-xl bg-white sm:max-w-xl sm:auto-rows-max sm:grid-cols-2">
      <div>
        <picture>
          <source media="(max-width:640px)" srcSet={ProductMobile} />
          <source media="" />
          <img
            className="h-full w-full"
            src={ProductDesktop}
            alt="Perfume bottle on top of a table surounding with leafes"
          />
        </picture>
      </div>
      <div className="p-7">
        <p className="leter mb-5 uppercase tracking-[0.5em]">Perfume</p>
        <h1 className="mb-7 font-fraunces text-4xl font-bold text-veryDarkBlue">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="mb-5">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="mb-5 flex items-center gap-5">
          <span className="font-fraunces text-3xl font-bold text-darkCyan">
            $149.99
          </span>
          <span className="line-through">$169.99</span>
        </div>
        <button className="flex w-full items-center justify-center gap-4 rounded-lg bg-darkCyan p-3 text-white hover:bg-emerald-900">
          <img src={CartIcon} alt="Cart Icon" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
