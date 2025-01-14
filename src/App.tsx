import "./App.css";
import Card from "./components/Card";

function App() {
  const date = new Date();
  return (
    <>
      <header className="flex justify-between">
        <span className="text-3xl">
          <h1>Evolve</h1>
        </span>
        <span>
          <h2>Account</h2>
        </span>
      </header>
      <div className="flex flex-col place-items-center justify-evenly">
        <textarea
          className="border border-blue-600 p-4"
          name=""
          id=""
          cols={50}
          rows={5}
          placeholder="Add a note..."
        ></textarea>
        <button className="bg-slate-200 text-red-500 px-2 py-1 mb-12 ml-10">
          Add
        </button>
      </div>
      <div className="border border-cyan-500 p-4 grid grid-cols-3">
        <Card
          title="First note"
          content="this is a test text. something is going to be a bit unnecessary in terms of gouging out the main advantage in this field of nootropical agenda which internships agree upon."
          createdAt={date}
          id="1"
          completed
        />
      </div>
    </>
  );
}

export default App;
