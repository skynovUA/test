import WebApp from "@twa-dev/sdk";
// import { signal } from "@preact/signals-react";

// const count = signal(0);

export const App = () => {
  return (
    // card use tailwindcss
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p className="text-gray-600">This is a card component</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => WebApp.showAlert("Hello World")}
      >
        Button
      </button>
    </div>
  );
};
