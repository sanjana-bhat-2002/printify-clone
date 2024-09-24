import { NavbarItemList } from "./NavbarItem";

const PCNav = () => {
  return (
    <header className="text-gray-600 body-font bg-white w-full shadow-md">
      <div className="container mx-auto flex flex-wrap px-4 py-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="Logo"
            className="h-8"
          />
        </a>
        <nav className="md:ml-auto md:mr-auto flex items-center text-base justify-center">
          {<NavbarItemList />}
        </nav>
        <button className="inline-flex items-center border py-1 px-3 mr-3 focus:outline-none hover:text-green-500 rounded text-base mt-4 md:mt-0">
          Log in
        </button>
        <button className="inline-flex items-center text-white font-semibold bg-green-500 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default PCNav;
