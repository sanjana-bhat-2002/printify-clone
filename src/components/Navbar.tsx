
import PCNav from "./PCNav";
import MobileNav from "./MobileNav";

const Navbar1 = () => {
  return (
    <>
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:flex w-full">
        <PCNav />
      </div>
    </>
  );
};

export default Navbar1;
