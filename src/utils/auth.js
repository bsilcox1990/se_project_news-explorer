export const signin = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const getUser = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Bradley", email: "Bradley@bradley.com", _id: "1" },
    });
  });
};
