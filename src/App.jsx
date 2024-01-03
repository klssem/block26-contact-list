import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import { useEffect } from "react";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
const apiURL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState(dummyContacts);

  useEffect(() => {
    async function getContacts() {
      try {
        const apiCall = await fetch(apiURL);
        const responseToJson = await apiCall.json();
        setContacts(responseToJson);
      } catch (err) {
        console.error("there was an error: ", err);
      }
    }
    getContacts();
  }, []);

  return (
    <>
      {!selectedContactId && (
        <div>
          <h1>Contact List</h1>
          <ContactList
            setSelectedContactId={setSelectedContactId}
            contacts={contacts}
          />
        </div>
      )}

      {selectedContactId && 
      <div id="contactCard">
        <h1>{contacts[selectedContactId-1].name}</h1>
        <p>
          Name: {contacts[selectedContactId-1].name}<br/>
          Username: {contacts[selectedContactId-1].username} <br/>
          Email: {contacts[selectedContactId-1].email} <br/>
          Phone Number: {contacts[selectedContactId-1].phone} <br/>
          Address: <br/>
          &nbsp;&nbsp;{contacts[selectedContactId-1].address.suite}
          &nbsp;{contacts[selectedContactId-1].address.street} <br/>
          &nbsp;&nbsp;{contacts[selectedContactId-1].address.city}, 
          &nbsp;{contacts[selectedContactId-1].address.zipcode} <br/>
          Company: {contacts[selectedContactId-1].company.name} <br/>
          Website: {contacts[selectedContactId-1].website} <br/>
        </p>
        <button onClick={()=>setSelectedContactId(null)}>Back to Contacts</button>
      </div> 
      }
    </>
  );
}

export default App;
