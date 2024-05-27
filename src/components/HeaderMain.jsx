import * as React from "react";

const HeaderMain = ({ onClickLogin, onClickRegister, onClickNavigate }) => {
  const [state] = React.useState({
    state: "",
  });

  const handleLoginClick = () => {
    state.state = "login";
    onClickLogin(state.state);
  };

  const handleRegisterClick = () => {
    state.state = "register";
    onClickRegister(state.state);
  };

  const handleToggleMenu = () => {
    document.getElementById("collapseMenu").classList.toggle("hidden");
  };

  const onViewContactForm = () => {
    onClickNavigate("contactForm");
  };

  return (
    <header className="flex shadow-md py-2 px-2 sm:px-10 bg-black font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="#">
          <img
            src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1714925981/ssu0f6771zfbjhk20rwk.png"
            alt="logo"
            className="w-36"
          />
        </a>

        <div
          id="collapseMenu"
          className="hidden lg:flex flex-col lg:flex-row gap-5 lg:gap-x-5 lg:space-y-0 lg:bg-transparent fixed lg:static lg:w-auto w-full top-0 left-0 lg:h-auto h-full bg-white z-40 p-6 lg:p-0"
        >
          <button
            id="toggleClose"
            className="lg:hidden absolute top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-x-5 lg:space-y-0 lg:bg-transparent">
            <li className="mb-6 hidden lg:hidden max-lg:block">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1714925981/ssu0f6771zfbjhk20rwk.png"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="lg:border-b border-gray-300 lg:py-0 px-3">
              <a
                href="#"
                className="hover:text-[ffd700] text-[#ffd700] block font-semibold text-[15px]"
              >
                Home
              </a>
            </li>
            <li className="lg:border-b border-gray-300 lg:py-0 px-3">
              <a
                href="#"
                className="hover:text-[#ffd700] text-gray-500 block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="lg:border-b border-gray-300 lg:py-0 px-3">
              <a
                href="#"
                className="hover:text-[#ffd700] text-gray-500 block font-semibold text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="lg:border-b border-gray-300 lg:py-0 px-3">
              <a
                href="#"
                className="hover:text-[#ffd700] text-gray-500 block font-semibold text-[15px]"
              >
                Blog
              </a>
            </li>
            <li className="lg:border-b border-gray-300 lg:py-0 px-3">
              <a
                href="#"
                className="hover:text-[#ffd700] text-gray-500 block font-semibold text-[15px]"
              >
                About
              </a>
            </li>
            <li className="lg:border-b border-gray-300 lg:py-0 px-3">
            <button onClick={onViewContactForm}>
              <a
                className="hover:text-[#ffd700] text-gray-500 block font-semibold text-[15px]"
              >
                Contact
              </a>
              </button>
            </li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <button
            className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#ffd700] bg-[#ffd700] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#ffd700] bg-[#ffd700] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            onClick={handleRegisterClick}
          >
            Sign up
          </button>

          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
export default HeaderMain;
