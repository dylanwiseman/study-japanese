import "../styles/styles.css";
import Card from "./Card";
import Header from "./Header";
import Actions from "./Actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TopActions from "./TopActions";
import New from "./New";

function App() {
  const dispatch = useDispatch();
  const vocabObj = useSelector((state) => state.vocab);
  const vocabArray = vocabObj.data;
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [readingToggle, setReadingToggle] = useState(true);
  const [newToggle, setNewToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);

  const previous = () => {
    if (index > 0) setIndex(index - 1);
  };

  const toggleReading = () => {
    setReadingToggle(!readingToggle);
    console.log(readingToggle);
  };

  const toggleEdit = () => {
    setEditToggle(!editToggle);
  };

  const toggleNew = () => {
    setNewToggle(!newToggle);
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
      <TopActions
        toggleReading={toggleReading}
        toggleNew={toggleNew}
        toggleEdit={toggleEdit}
      />
      {!newToggle && <Card index={index} readingToggle={readingToggle} />}
      {newToggle && <New toggleNew={toggleNew} />}
      <Actions previous={previous} next={next} />
    </div>
  );
}

export default App;
