import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Lottie from 'lottie-react';
import Button from '../../button';
import LoginAnimation from '../../assets/images/LoginAnimation.json'; // Assuming the correct path to the Lottie file
import ButtonGradient from '../../buttonGrad';
import { useForm } from 'react-hook-form';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Email:', data.email);
    console.log('Password:', data.password);
  };

  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen bg-transparent flex items-center justify-center py-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl bg-transparent rounded-3xl shadow-[10px] overflow-hidden neon-border-purple">
          {/* Neon border applied to this main div */}

          {/* Left Section with Lottie Animation */}
          <div className="flex w-full md:w-1/2 bg-[#ffffff0e] p-6 md:p-12 flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white ">Empower Your Services</h2>
            <p className="text-white mt-4 text-center leading-relaxed">
              ServiceQuery ensures top-level security and privacy for your data. We will never share or sell your personal information.
            </p>
            <Lottie
              animationData={LoginAnimation}
              className="mt-20 w-full h-[250px] md:h-[250px] object-cover rounded-lg shadow-lg"
              loop={true}
              autoplay={true}
            />
         
          </div>

          {/* Right Section with Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white rounded-r-3xl flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-[#1a1a2ec2] mb-4 text-center">Welcome Back!</h1>
            <p className="text-sm text-gray-600 text-center mb-6">
              Log in to continue using ServiceQuery and manage your services securely.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border focus-within:ring-2 focus-within:ring-[#009ca0]">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email format'
                      }
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border focus-within:ring-2 focus-within:ring-[#009ca0]">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters'
                      }
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
              </div>

              {/* Checkbox for Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  {...register('remember')}
                  className="mr-2 text-[#009ca0] focus:ring-[#009ca0] focus:ring-opacity-50"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <Button className="w-40 neon-border">
                  <span className="text-black">Log In</span>
                </Button>
              </div>
            </form>

            {/* Forgot Password Link */}
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-[#009ca0] hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Register Section */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don’t have an account?{' '}
                <a href="#" className="text-[#009ca0] font-bold hover:underline">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonGradient />
      <Footer />
    </>
  );
};

export default Login;
