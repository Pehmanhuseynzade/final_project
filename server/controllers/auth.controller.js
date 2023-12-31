// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const createError = require("../utils/error.js")

// const register = async (req, res, next) => {
//   try {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };
// const login = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return next(createError(400, "Username and password are required."));
//     }

//     const user = await User.findOne({ username });

//     if (!user.req.body) {
//       return next(createError(404, "User not found!"));
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect) {
//       return next(createError(400, "Wrong password or username!"));
//     }

//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT_SECRET
//     );

//     const { password: _, isAdmin, ...otherDetails } = user._doc;

//     res.cookie("access_token", token, {
//       httpOnly: true,
//     }).status(200).json({ details: { ...otherDetails }, isAdmin });
//   } catch (err) {
//     next(err);
//   }
// };


// module.exports = login;
// module.exports = register; 
