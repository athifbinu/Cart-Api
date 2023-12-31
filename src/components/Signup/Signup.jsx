import React, { useState } from "react";

import loginImg from "../../Assets/images/log.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const [err, Seterror] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://caffa.smsoman.com/api/V1/customers",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            Authorization: "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
          },
        }
      );

      if (response.status === 200) {
        console.log("Signup successful", response);

        swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: "You have successfully signed up.",
        });

        navigate("/login");
      } else {
        console.error("Signup failed");
        Seterror(true);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className=" min-h-fit mt-12 flex items-center justify-center mb-11">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-2xl items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Signup</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="number"
                name="phone"
                placeholder="Pone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
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
