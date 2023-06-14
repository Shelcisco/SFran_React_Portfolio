import React, {useState} from "react"; 
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import "./index.css" 

function App() {
  const [page,setPage] = useState("about");
  return (
    <div className="App">
      <div className="content-wrapper">
      <Header page={page} setPage={setPage}/>
      <Main page={page}/>
      </div>
  <Footer/>
    </div>
  );
}


export default App;
