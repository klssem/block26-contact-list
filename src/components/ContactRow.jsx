import PropTypes from "prop-types";

export default function ContactRow({ contact, setSelectedContactId }) {
  // console.log(contact);
  return (
    <tr onClick={()=>{setSelectedContactId(contact.id)}}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

ContactRow.propTypes = {
  contact: PropTypes.object.isRequired,
  setSelectedContactId: PropTypes.func,
};
