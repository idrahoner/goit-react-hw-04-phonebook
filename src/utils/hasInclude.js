import { checkEqual } from 'utils';

export function hasInclude(newContact, contactList) {
  return contactList.reduce(
    (acc, { name, number }) =>
      !acc
        ? (acc = checkEqual(name, newContact.name)) ||
          (acc = checkEqual(number, newContact.number))
        : acc,
    ''
  );
}
