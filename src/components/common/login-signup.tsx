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
          <div className="flex flex-col w-3/4 h-1/3 max-w-md min-h-96 bg-white rounded-md opacity-100 z-20 shadow-2xl">
            <div className="relative top-0 flex flex-row text-center  justify-center items-center w-full border-b h-12">
              <button
                onClick={() => handleBtnClick("loginBtn")}
                id="loginBtn"
                className="w-full"
              >
                I have an account
              </button>
              <span>|</span>
              <button
                onClick={() => handleBtnClick("signUpBtn")}
                id="signUpBtn"
                className="w-full underline"
              >
                Create an account
              </button>
            </div>
            <div className=" flex flex-col justify-center text-center under items-center w-full h-full">
              <div className="w-full mb-4">
                <h2 className="text-4xl font-bold">Create an Account</h2>
              </div>
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
                <button className="bg-slate-800 rounded-md text-white p-2">
                  Create my Account!
                </button>
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
        <div className="flex flex-col w-3/4 h-1/3 max-w-md min-h-96 bg-white rounded-md opacity-100 z-20 shadow-2xl">
          <div className="relative top-0 flex flex-row text-center  justify-center items-center w-full border-b h-12">
            <button
              onClick={() => handleBtnClick("loginBtn")}
              id="loginBtn"
              className="w-full underline"
            >
              I have an account
            </button>
            <span>|</span>
            <button
              onClick={() => handleBtnClick("signUpBtn")}
              id="signUpBtn"
              className="w-full"
            >
              Create an account
            </button>
          </div>
          <div className=" flex flex-col justify-center text-center under items-center w-full h-full">
            <div className="w-full mb-4">
              <h2 className="text-4xl font-bold">Login</h2>
            </div>
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
              <button className="bg-slate-800 rounded-md text-white p-2">
                Login
              </button>
              <span>
                <a href="#">Forgot Password</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
