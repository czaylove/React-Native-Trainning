// data sources

// con
const user = [
  { id: '1', username: 'abcd', password: '1234' },
  { id: '2', username: 'abcde', password: '12345' },
];

export const findUserById = ({ id }) => user.find(u => u.id === id);

export const addUser = () => {};
