import { useState } from "react";
import Engraves from "./Engraves";
import Jewelry from "./Jewelry";
import { TotalStatsType } from "./types";
import Modal from "./Modal";

function App() {
  const initialData: TotalStatsType = {
    neck: null,
    earrings1: null,
    earrings2: null,
    ring1: null,
    ring2: null,
    fetr: null,
    book1: null,
    book2: null,
  };
  const [isFormOpen, setISFormOpen] = useState(false);
  const [data, setData] = useState<TotalStatsType>(initialData);
  const [activeBij, setActiveBij] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Engrave Calculator</h1>
      </header>
      <main>
        <Engraves />
        <Jewelry data={data} />
      </main>
      {isFormOpen && (
        <Modal data={data} setData={setData} setIsFormOpen={setISFormOpen} />
      )}
    </div>
  );
}

export default App;
