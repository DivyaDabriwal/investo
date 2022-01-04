import "./App.css";
import Topcards from "./components/Topcards";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Bottomcards from "./components/Bottomcards";
import Actions from "./components/Actions";
// import Giftstocks from "./components/Giftstocks";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar username="Amigos"></Sidebar>
      <Topcards username="Amigos"></Topcards>
      <Bottomcards></Bottomcards>
      <Actions></Actions>
      {/* <Giftstocks></Giftstocks> */}
    </>
  );
}

export default App;
