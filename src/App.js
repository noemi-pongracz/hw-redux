import './App.css';
import Footer from './components/footer/Footer';
import AddForm from './components/forms/addForm/AddForm';
import EditForm from './components/forms/editForm/EditForm';
import Header from './components/header/Header';
import UserList from './components/userList/UserList';

const baseUrl = "http://localhost:3000"
const headers = {
    'Content-Type': 'application/json;charset=utf-8'
};

function App() {

  return ( 
  <>
    <Header/>
    <main className = 'main-content' >
      <UserList/>
      <AddForm/>
      <EditForm/>
      <Footer/>
    </main> 
  </>
  );
}

export default App;