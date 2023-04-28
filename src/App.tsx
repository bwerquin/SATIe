import SATIeLogo from "/satie.svg";
import "./App.css";
import satieExample from "./satie-example.json";
import { Orchestrator } from "./components/orchestrator";
// This should be imported from @inseefr/lunatic
import { LunaticSource } from "./typeLunatic/type-source";

export function App() {
  // This should be "satisfies"...
  const mySource: LunaticSource = satieExample as LunaticSource;

  return (
    <>
      <div>
        <img src={SATIeLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>SATIe</h1>
      <Orchestrator source={mySource} />
    </>
  );
}
