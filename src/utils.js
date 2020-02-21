import { no } from "./number";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const RN1 = Math.floor(Math.random() * no.length);
  const RN2 = Math.floor(Math.random() * no.length);
  const RN3 = Math.floor(Math.random() * no.length);
  const RN4 = Math.floor(Math.random() * no.length);
  return `${no[RN1]}${no[RN2]}${no[RN3]}${no[RN4]}`;
}; 

var TeleSignSDK = require('telesignsdk');

export const sendSecretMsg = (phone, secret) => {
  const customerId = process.env.TELESIGN_ID
  const apiKey = process.env.TELESIGN_APIKEY

  const client = new TeleSignSDK( customerId,
      apiKey
  );
  const phoneNumber = `82${phone}`;
  const message = `Hello! Your login secret is ${secret}.Copy paste on the app to log in`;
  const messageType = "OTP";

  function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}

  return client.sms.message(messageCallback, phoneNumber, message, messageType);
};

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET); 