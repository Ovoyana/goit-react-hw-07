import css from './App.module.css';
import ContactForm from '/Users/Asus/Documents/GitHub/goit-react-hw-07/src/components/ContactForm/ContactForm';
import SearchBox from '/Users/Asus/Documents/GitHub/goit-react-hw-07/src/components/SearchBox/SearchBox';
import ContactList from '/Users/Asus/Documents/GitHub/goit-react-hw-07/src/components/ContactList/ContactList';
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from '../../redux/ContactsSlice';
import { useEffect } from "react";
import { fetchContacts } from '../../redux/contactsOps';
import { PiBookOpenTextLight } from "react-icons/pi";


export default function App() {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
    
  return (
    <div className={css.box}>
      <h1 className={css.title}><PiBookOpenTextLight className={css.icon}/>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className="text">No contacts!!!</p>
      )}
    </div>
  );
}