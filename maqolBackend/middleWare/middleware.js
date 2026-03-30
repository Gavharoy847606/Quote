export const passwordMiddleware = (req, res) => {
  const age = res.query.age;
  if (age === 18) {
    next();
  } else {
    console.log("Middle Wareda ishladi.");
  }
};
