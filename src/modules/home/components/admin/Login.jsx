import COVER_IMAGE from "../image/login1.jpg";

export const Login = () => {
  return (
    <div className=" w-full h-screen flex items-start ">
      <div className=" relative w-1/2 h-full flex flex-col">
        <div className=" absolute top-[20%] left-[10%] flex flex-col ">
          <h1 className="text-4xl justify-center text-cyan-700 font-bold my-4">
            SISTEM INFORMASI
          </h1>
          <p className="text-xl text-black font-normal">
            Badan Pembangunan Daerah (BAPEDA) Kabupaten Nias Selatan
          </p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" />
      </div>

      <div className=" w-1/2 mx-auto h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className=" w-full max-w-[500px] mx-auto text-xl text-black font-semibold">
          SEU BAGOA
        </h1>

        <div className=" w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className=" text-3xl font-semibold mb-2">Login</h3>
            <p className=" text-base mb2">
              Wellcome Back! Please Enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Pasword"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className=" w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Password?
            </p>
          </div>

          <div>
            <button className="w-full text-[#f5f5f5] my-2 font-semibold bg-black rounded-md p-4 text-center flex items-center justify-center">
              Login
            </button>
            <button className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-blue-950 rounded-md p-4 text-center flex items-center justify-center">
              Register
            </button>
          </div>
        </div>

        <div className=" w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Dont have account?{" "}
            <span className=" font-semibold underline underline-offset-2 cursor-pointer">
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
