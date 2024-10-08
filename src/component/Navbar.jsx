/* eslint-disable react/prop-types */
// LOGO COMPONENT START
function Logo() {
  return (
    <>
      <a href="index.html" className="navbar-logo block w-60 max-w-full px-4">
        <img
          src="/assets/images/logo/logo.svg"
          alt="logo"
          className="header-logo h-12"
        />
      </a>
    </>
  );
}
// LOGO COMPONENT END
// MAIN MENU COMPONENT START
function Navlinks() {
  return (
    <>
      <ul className="hidden lg:flex ">
        <li className="group relative">
          <a
            href="#home"
            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
          >
            Home
          </a>
        </li>
        <li className="group relative">
          <a
            href="#about"
            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
          >
            About
          </a>
        </li>
        <li className="group relative">
          <a
            href="#pricing"
            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
          >
            Pricing
          </a>
        </li>

        <li className="group relative">
          <a
            href="blog-grids.html"
            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
          >
            Blog
          </a>
        </li>
      </ul>
    </>
  );
}
// MAIN MENU COMPONENT END
// BUTTON COMPONENT START
export function Button({ value, link }) {
  return (
    <a
      href={link}
      className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-[14px] text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
    >
      {value}
    </a>
  );
}
export function ButtonSecondary({
  value,
  link,
  bgColor,
  borderColor,
  bgEffect,
  borderEffect,
}) {
  return (
    <>
      {" "}
      <a
        href={link}
        className={`inline-flex items-center justify-center rounded-md  px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out   ${
          borderColor ? borderColor : ""
        } ${bgColor ? bgColor : " bg-white"} ${
          bgEffect ? bgEffect : "hover:bg-gray-2"
        } ${borderEffect ? borderEffect : " hover:text-body-color"}`}
      >
        {value}
      </a>
    </>
  );
}
// BUTTON COMPONENT END

export default function Navbar() {
  return (
    <>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <Logo />
              <Navlinks />
              <div className="sm:flex">
                <a
                  href="signin.html"
                  className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </a>
                <Button value={"Sign Up"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
