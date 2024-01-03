
import ContactRow from "./ContactRow";
import PropTypes from "prop-types"

export default function ContactList({contacts, setSelectedContactId}) {

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3 ">Contact List</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}

ContactList.propTypes = {
    setSelectedContactId: PropTypes.func,
    contacts: PropTypes.array.isRequired,
}