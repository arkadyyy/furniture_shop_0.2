// {
//     isAdmin: { type: Boolean, required: true, default: false },
//     username: { type: String, required: true },
//     email: { type: String, required: true },
//     address: { type: String, required: true },
//     password: { type: String, required: true },
//   },

const users = [
  {
    isAdmin: true,
    username: "arkady",
    email: "arkados2@gmail.com",
    address: "geva binyamin yasmin 4",
    password: "12345",
  },
  {
    isAdmin: false,
    username: "maxim",
    email: "maxim2@gmail.com",
    address: "geva binyamin yasmin 4",
    password: "12345",
  },
  {
    isAdmin: false,
    username: "matan",
    email: "matan123@gmail.com",
    address: "beit zayit 22",
    password: "54321",
  },
  {
    isAdmin: false,
    username: "roman",
    email: "roman321@gmail.com",
    address: "malle adumim 11",
    password: "22222",
  },
];
module.exports = users;
