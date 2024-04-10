import { createSelector } from "@reduxjs/toolkit";
import { selectAllTasks } from "../contacts/selectors";
export const selectNameFilter = (state) => state.filter.name;
export const selectFilteredContacts = createSelector(
  [selectAllTasks, selectNameFilter],
  (contacts, filterName) => {
    if (
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      ).length <= 0
    ) {
      return contacts.filter((contact) =>
        contact.number.toLowerCase().includes(filterName.toLowerCase())
      );
    } else {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }
  }
);
