import WebApp from '@twa-dev/sdk'
import { signal } from "@preact/signals-react";

const count = signal(0);


export const App = () => {
  return (
    <div>
      <h1>App</h1>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
        <button onClick={() => count.value++}>
            Increment Count
        </button>
      </div>
    </div>
  );
};
