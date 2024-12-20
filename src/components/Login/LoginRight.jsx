import React, { useState } from "react";
import { KeyIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom"; // Import Link for routing

// Import image assets
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import bitbucket from "../../assets/bitbucket.svg";
import azureDevops from "../../assets/azure-devops.svg";
import gitlab from "../../assets/gitlab.svg";

const LoginRight = () => {
  const [isSaas, setIsSaas] = useState(true);

  return (
    <div className="flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4">
      <div className="bg-white flex flex-col rounded-lg w-full border">
        <div className="border-b flex flex-col p-5 w-full gap-4">
          <div className="flex items-center justify-center gap-4">
            <img src={logo} alt="logo" />
            <span className="font-light">CodeAnt AI</span>
          </div>
          <div className="flex justify-center text-2xl font-semibold mt-2">
            Welcome to CodeAnt AI
          </div>
          <div>
            <div className="bg-gray-100/70 border rounded-lg">
              <button
                className={`p-3 rounded-lg w-1/2 ${isSaas ? "bg-[#1570EF] text-white" : ""}`}
                onClick={() => {
                  setIsSaas(true);
                }}
              >
                SAAS
              </button>
              <button
                className={`p-3 rounded-lg w-1/2 ${isSaas ? "" : "bg-[#1570EF] text-white"}`}
                onClick={() => {
                  setIsSaas(false);
                }}
              >
                Self Hosted
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-center w-full">
            {isSaas ? (
              <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                <Link
                  to="/dashboard" // Use Link instead of a
                  className="border items-center flex w-full gap-3 p-2 rounded-lg justify-center"
                >
                  <img src={github} alt="github" className="w-5" />
                  Sign in with Github
                </Link>
                <Link
                  to="/dashboard" // Use Link instead of a
                  className="border items-center flex w-full gap-3 p-2 rounded-lg justify-center"
                >
                  <img src={bitbucket} alt="bitbucket" className="w-5" />
                  Sign in with Bitbucket
                </Link>
                <Link
                  to="/dashboard" // Use Link instead of a
                  className="border items-center flex w-full gap-3 p-2 rounded-lg justify-center"
                >
                  <img src={azureDevops} alt="azure-devops" className="w-5" />
                  Sign in with Azure DevOps
                </Link>
                <Link
                  to="/dashboard" // Use Link instead of a
                  className="border items-center flex w-full gap-3 p-2 rounded-lg justify-center"
                >
                  <img src={gitlab} alt="gitlab" className="w-5" />
                  Sign in with GitLab
                </Link>
              </div>
            ) : (
              <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                <Link
                  to="/dashboard" // Use Link instead of a
                  className="border items-center flex w-full gap-3 p-2 rounded-lg justify-center"
                >
                  <img src={gitlab} alt="gitlab" className="w-5" />
                  Sign in with GitLab
                </Link>
                <Link
                  to="/dashboard" // Use Link instead of a
                  className="border items-center flex w-full gap-3 p-2 rounded-lg justify-center"
                >
                  <KeyIcon className="w-5" />
                  Sign in with SSO
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <span>
          By signing up you agree to the <b>Privacy Policy.</b>
        </span>
      </div>
    </div>
  );
};

export default LoginRight;
