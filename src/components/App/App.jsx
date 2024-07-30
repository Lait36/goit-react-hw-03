import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [contacts, setContacts] = useState([
    { name: "Rosie Simpson", number: "459-12-56", id: "id-1" },
    { name: "Hermione Kline", number: "443-89-12", id: "id-2" },
    { name: "Eden Clements", number: "645-17-79", id: "id-3" },
    { name: "Annie Copeland", number: "227-91-26", id: "id-4" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (newValue) => {
    setInputValue(newValue);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const deleteContact = (id) => {
    setContacts(contacts.filter((contacts) => contacts.id != id));
  };

  const onAdd = (newContact) => {
    console.log(newContact);
    setContacts((prevState) => [...prevState, newContact]);
  };

  const json = JSON.stringify(contacts);
  localStorage.setItem("contacts", json);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox value={inputValue} onChange={changeInputValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}
