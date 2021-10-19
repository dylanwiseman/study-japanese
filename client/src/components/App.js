import "../App.css";
import Card from "./Card";
import Header from "./Header";
import Actions from "./Actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  async function getVocab() {
    const { data } = await axios.get("http://localhost:5004/vocab");
    console.log("data returned from call:", data);

    dispatch({
      type: "GET_VOCAB",
      value: data,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getVocab();
  }, []);

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      <Actions></Actions>
    </div>
  );
}

export default App;
