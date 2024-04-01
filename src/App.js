import UserList from "./UserList";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container className="my-5">
        <h1 className="text-center " style={{color : '#B384A7'}}>Users List</h1>
        <span class="border-0"></span>
        <UserList />
      </Container>
    </div>
  );
}

export default App;
