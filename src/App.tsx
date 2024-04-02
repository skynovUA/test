import WebApp from "@twa-dev/sdk";
import { effect, signal } from "@preact/signals-react";

const LOCAL_STORAGE_KEY = "count";

const count = signal(getCount());

function getCount() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (value === null) return 0;
  return JSON.parse(value);
}

effect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(count));
});

export const App = () => {
  return (
    <div className="rounded-lg shadow-lg p-4" style={{ 
      backgroundColor: WebApp.themeParams.bg_color,
     }}> 
      <h1 className="text-2xl font-bold">Counter</h1>
      <p className="text-lg">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => count.value--}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => count.value++}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
