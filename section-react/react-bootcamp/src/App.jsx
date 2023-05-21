// import Greeter from "./Greeter";
// import Clicker from "./assets/Clicker";
// import Counter from "./Counter";
import ColorBox from "./ColorBox";
import "./App.css";

const colors = [
 "#06b6d4",
 "#818cf8",
 "#e879f9",
 "#881337",
 "#0d9488",
 "#34d399",
 "#064e3b",
 "#082f49",
 "#84cc16"
]

export default function App() {
  return (
    <>
      {/* <Greeter name="Bill" from="eli" />
      <Greeter name="Ted" from="eli"/>
      <Greeter name="Mike" from="eli"/> */}
      {/* <Clicker /> */}
      {/* <Counter /> */}
      <ColorBox  colors={colors}/>
    </>
  );
}












