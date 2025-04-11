import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex fixed bottom-10 justify-center w-full h-22 ">
        <div className="bg-white rounded-4xl shadow-lg p-3 flex gap-4 align-middle justify-center ">
          <Button color="red" setBgColor={setBgColor} />
          <Button color="green" setBgColor={setBgColor} />
          <Button color="blue" setBgColor={setBgColor} />
          <Button color="yellow" setBgColor={setBgColor} />
          <Button color="pink" setBgColor={setBgColor} />
          <Button color="cyan" setBgColor={setBgColor} />
          <Button color="orange" setBgColor={setBgColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
