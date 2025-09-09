import React from "react";

const HomePage = () => {
  return (
    <main className="container mt-4 flex flex-1 flex-col">
      <h1 className="text-lg" data-testid="home-text">
        Welcome to the CI/CD Mini Project
      </h1>
      <p className="text-muted-foreground mt-4 text-sm">
        Running on:{" "}
        <span className="rounded-md bg-black px-2 py-1 text-white">
          {process.env.ENVIRONMENT}
        </span>
      </p>
    </main>
  );
};

export default HomePage;
