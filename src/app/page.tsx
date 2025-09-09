import React from "react";

const HomePage = () => {
  return (
    <main className="container mt-4 flex flex-1 flex-col">
      <h1 className="text-xl">Welcome to the CI/CD Mini Project</h1>
      <p className="mt-4 text-lg">
        Running on:{" "}
        <span className="rounded-md bg-black px-2 py-1 text-white">
          {process.env.ENVIRONMENT}
        </span>
      </p>
    </main>
  );
};

export default HomePage;
