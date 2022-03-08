import { useFetch } from "./hooks/fetch";
import { useLocalStorage } from "./hooks/localStorage";

function App() {
  const {data} = useFetch("https://sp2-database.herokuapp.com/products" )
  const [jwt, setJwt] = useLocalStorage("jwt", [1, 2, 3, 4])
  console.log(jwt)
  return (
    <div className="App">
    </div>
  );
}

export default App;
