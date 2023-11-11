const ContactList = ({ contacts, onDelete }) => {

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <button
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
            ❌
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
