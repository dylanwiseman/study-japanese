import "../App.css";
import Card from "./Card";
import Header from "./Header";
import Actions from "./Actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const vocabObj = useSelector((state) => state.vocab);
  const vocabArray = vocabObj.data;
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const previous = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < vocabArray.length - 1) setIndex(index + 1);
  };

  async function getVocab() {
    const { data } = await axios.get("http://localhost:5004/vocab");
    console.log("data returned from call:", data);

    let dataObj = { data: data };

    dispatch({
      type: "GET_VOCAB",
      value: dataObj,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getVocab();
  }, []);

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="App">
      <Header />
      <Card index={index} />
      <Actions previous={previous} next={next} />
    </div>
  );
}

export default App;
