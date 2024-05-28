export default function Login_SignUp_Modal({
  isOpen,
  onClose,
  showAccountCreation,
  setShowAccountCreation,
}: {
  isOpen: boolean;
  onClose: Function;
  showAccountCreation: boolean;
  setShowAccountCreation: Function;
}) {
  function handleBtnClick(btnId: string) {
    if (btnId === "loginBtn") {
      return setShowAccountCreation(false);
    }
    if (btnId === "signUpBtn") {
      return setShowAccountCreation(true);
    }
  }

  if (isOpen) {
    if (showAccountCreation) {
      return (
        <div
          id="login-signup-modal"
          className="absolute flex flex-row w-full h-full justify-center items-center top-0 z-10"
        >
          <div
            onClick={() => onClose(false)}
            className="absolute top-0 flex flex-row justify-center items-center h-screen w-screen bg-black opacity-50"
          ></div>
          <div className="flex flex-col w-3/4 h-1/3 max-w-md min-h-96 bg-white rounded-xl opacity-100 z-20 shadow-2xl">
            <div className="relative top-0 flex flex-row text-center  justify-center items-center w-full h-12">
              <button
                onClick={() => handleBtnClick("loginBtn")}
                id="loginBtn"
                className="w-full h-full border-b bg-slate-100 rounded-tl-xl"
              >
                Login
              </button>
              <button
                onClick={() => handleBtnClick("signUpBtn")}
                id="signUpBtn"
                className="w-full font-semibold h-full border-l rounded-tr-xl text-gray-400"
              >
                Register
              </button>
            </div>
            <div className=" flex flex-col space-y-2 justify-center text-center items-center w-full p-4 h-full">
              <div className="flex flex-col justify-center items center w-3/4 max-w-64 space-y-2">
                <input
                  className="border rounded-md h-10 p-1"
                  type="text"
                  placeholder="Choose a Username"
                />
                <input
                  className="border rounded-md h-10 p-1"
                  type="text"
                  placeholder="Enter your Email Address"
                />
                <input
                  className="border rounded-md h-10 p-1"
                  type="password"
                  placeholder="Choose a Password"
                />
                <input
                  className="border rounded-md h-10 p-1"
                  type="password"
                  placeholder="Confirm your Password"
                />
                <div className="pt-4">
                  <button className="w-3/4 bg-black rounded-md text-white p-2">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        id="login-signup-modal"
        className="absolute flex flex-row w-full h-full justify-center items-center top-0 z-10"
      >
        <div
          onClick={() => onClose(false)}
          className="absolute top-0 flex flex-row justify-center items-center h-screen w-screen bg-black opacity-50"
        ></div>
        <div className="flex flex-col w-3/4 h-1/3 max-w-md min-h-96 bg-white rounded-xl opacity-100 z-20 shadow-2xl">
          <div className="relative top-0 flex flex-row text-center  justify-center items-center w-full h-12">
            <button
              onClick={() => handleBtnClick("loginBtn")}
              id="loginBtn"
              className="w-full font-semibold h-full border-r text-gray-400 rounded-tl-xl"
            >
              Login
            </button>
            <button
              onClick={() => handleBtnClick("signUpBtn")}
              id="signUpBtn"
              className="w-full h-full border-b bg-gray-100 rounded-tr-xl"
            >
              Register
            </button>
          </div>
          <div className=" flex flex-col justify-center text-center under items-center w-full h-full p-4">
            <div className="flex flex-col justify-center items center w-3/4 max-w-64 space-y-2">
              <input
                className="border rounded-md h-10 p-1"
                type="text"
                placeholder="Username or Email Address"
              />
              <input
                className="border rounded-md h-10 p-1"
                type="password"
                placeholder="Password"
              />
              <div className="pt-4">
                <button className="w-3/4 bg-black rounded-md text-white p-2">
                  Login
                </button>
              </div>
              <span className="text-gray-500 hover:text-black">
                <a href="#">Forgot Password</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
