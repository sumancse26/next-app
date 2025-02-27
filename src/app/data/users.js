const users = [
  {
    email: "abc@gmail.com",
    password: "123456",
  },
  {
    email: "abcd@gmail.com",
    password: "123456",
  },
];

export const getUserByEmail = (credentials) => {
  const user = users.find((user) => user.email === credentials.email);
  return user;
};
