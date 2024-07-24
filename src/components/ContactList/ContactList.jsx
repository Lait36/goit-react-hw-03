import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({contacts}) {
  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.listItem} >
            <Contact contact={contact} />    
        </li>
      ))}
    </ul>
  );
}
// return (
//     <ul className={css.container}>
//       {friends.map((friend) => (
//         <li key={friend.id}>
//           <FriendListItem friend={friend} />
//         </li>
//       ))}
//     </ul>
//   );