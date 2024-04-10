import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
// import { selectAllTasks } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contact}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
// id={contact.id}
// export default function ContactList() {
//   const contacts = useSelector(selectFilteredContacts);
//   return (
//     <ul className={css.list}>
//       {contacts.map((contact) => (
//         <li key={contact.id} className={css.contact}>
//           <Contact contact={contact} />
//         </li>
//       ))}
//     </ul>
//   );
// }
