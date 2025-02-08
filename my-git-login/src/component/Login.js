import React from "react";

const LoginPage = () => {
  const handleLogin = (provider) => {
    window.location.href = `http://localhost:5000/auth/${provider}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Welcome to Panto</h1>
      <div className="space-y-4" >
        <button
          onClick={() => handleLogin("gitlab")}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Login using GitLab
        </button>
        <button
          onClick={() => handleLogin("github")}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900"
        >
          Login using GitHub
        </button>
        <button
          onClick={() => handleLogin("bitbucket")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Login using BitBucket
        </button>
      </div>
     
    </div>
  );
};

export default LoginPage;
