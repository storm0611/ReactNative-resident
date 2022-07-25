const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { getRandomInt } = require("../utils");

router.post("/login", async (req, res) => {
  try {
    console.log("login", req.body)
    const { email, password } = req.body;
    let message = [];
    if (!email) message.push("¡correo electronico requerido!  ");
    if (message.length) return res.json({ success: false, message });

    if (!password) message.push("¡Se requiere contraseña!");
    if (message.length) return res.json({ success: false, message });

    const user = await User.findOne({ email });
    if (!user) message.push("¡usuario no encontrado!");

    if (message.length) return res.json({ success: false, message });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) message.push("¡credencial inválida!");

    if (message.length) return res.json({ success: false, message });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    user.token = token;
    await user.save();

    res.json({ success: true, user });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
});

router.post("/register", async (req, res) => {
  console.log("register", req.body)
  let message = [];
  try {
    const { name, last_name, first_name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (!name) message.push("must enter name!");
    if (!first_name) message.push("must enter first name!");
    if (!last_name) message.push("must enter last name!");
    if (!email) message.push("must enter email!");
    if (!password) message.push("must enter password!");
    if (message.length) return res.json({ success: false, message }); 

    if (user) message.push("This email alreay used!");
    if (message.length) return res.json({ success: false, message });

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const verification_code = getRandomInt(100001, 999999);

    const new_user = new User({
      name,
      first_name,
      last_name,
      email,
      password: bcryptPassword,
      verification_code,
    });



    await new_user.save();
    const token = jwt.sign(
      { user_id: new_user._id, email },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    new_user.token = token;
    await new_user.save();

    // await SendVerificationCode({
    //   email,
    //   verification_code,
    //   user_id: new_user.id,
    //   template: "confirmation",
    // });

    message.push("register successfully");

    res.json({ success: true, new_user });
  } catch (err) {
    res.json({ err });
  }
});

// const SendVerificationCode = async (input) => {
//   let { email, from, phone, subject, verification_code, template, send_one } =
//     input;

//   let final_output = [];
//   if (phone) {
//     let payload = {
//       to: phone,
//       from: TWILIO_LOCAL_PHONE_NUMBER,
//       template,
//       payload: { code: verification_code },
//     };
//     const sendSMS = await smsTransporter(payload);
//     let output = {
//       type: "sms",
//       result: JSON.stringify(sendSMS),
//     };
//     if (send_one) {
//       return output;
//     } else {
//       final_output.push(output);
//     }
//   }

//   if (email) {
//     await emailTransporter({
//       from: from || "test@test.com",
//       to: email,
//       subject: subject || "Verification Code",
//       template: template || "verification",
//       detail: {
//         email,
//         code: verification_code,
//       },
//     });
//     let output = {
//       type: "email",
//     };
//     if (send_one) {
//       return output;
//     } else {
//       final_output.push(output);
//     }
//   }
//   return final_output;
// };

module.exports = router;
