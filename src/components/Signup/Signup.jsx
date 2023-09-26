import React from "react";

import loginImg from "../../Assets/images/log.jpeg";
const Signup = () => {
  return (
    <section className=" min-h-fit mt-12 flex items-center justify-center mb-11">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-2xl items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Signup</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="name"
              placeholder="First Name"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="text"
                name="Last Name"
                placeholder="Last Name"
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="number"
                name="pone number"
                placeholder="Pone Number"
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Signup
            </button>
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={loginImg} alt="Login" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
