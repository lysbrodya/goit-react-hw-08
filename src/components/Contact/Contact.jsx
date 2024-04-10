import { FaUser, FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

// export default function Task(text) {
//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(deleteContact(text.id));
//   return (
//     <div className={css.wrapper}>
//       <p className={css.text}>{text.text.name}</p>
//       <button type="button" className={css.button} onClick={handleDelete}>
//         Delete
//       </button>
//     </div>
//   );
// }
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.userContact}>
        {" "}
        <p className={css.nameNum}>
          <FaUser className={css.Icon} />
          {contact.name}
        </p>
        <p className={css.nameNum}>
          <FaPhone className={css.Icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.buttonDel}>
        Delete
      </button>
    </>
  );
}
