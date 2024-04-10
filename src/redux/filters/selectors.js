import { createSelector } from "@reduxjs/toolkit";
import { selectAllTasks } from "../contacts/selectors";
export const selectNameFilter = (state) => state.filter.name;
export const selectFilteredContacts = createSelector(
  [selectAllTasks, selectNameFilter],
  (contacts, filterName) => {
    return (
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      ) &&
      contacts.filter((contact) =>
        contact.number.toLowerCase().includes(filterName.toLowerCase())
      )
    );
  }
);

// import { createSelector } from "@reduxjs/toolkit";
// import { selectAllTasks } from "../contacts/selectors";

// export const selectNameFilter = (state) => state.filter.name;
// export const selectNumberFilter = (state) => state.filter.number;

// export const selectFilteredContacts = createSelector(
//   [selectAllTasks, selectNameFilter, selectNumberFilter],
//   (contacts, filterName, filterNumber) => {
//     return contacts.filter((contact) => {
//       const nameMatches = contact.name
//         .toLowerCase()
//         .includes(filterName.toLowerCase());
//       const numberMatches = contact.number.includes(filterNumber);
//       return nameMatches && numberMatches;
//     });
//   }
// );
