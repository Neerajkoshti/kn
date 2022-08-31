const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const twilio = require('twilio');
const dotenv = require('dotenv').config();
const port = 8000
const app = express()
const jsonParser = bodyParser.json()
const Schema = require('./db')

app.use(cors())
app.listen(port, () => console.log(`App is running on ${port}`))

app.get('/contact', async (req, res, next) => {
    try {
        const data = await Schema.contact.find({}).lean()
        res.json({ data })
    } catch (error) {
        next(error)
    }
})
app.get('/message', async (req, res, next) => {
    try {
        const data = await Schema.message.find({}).sort({ timeDate: -1 })
        res.json({ data })
    } catch (error) {
        next(error)
    }
})
app.post('/message', jsonParser, async (req, res, next) => {
    try {
        const document = req.body
        const data = await Schema.message.create(document)
        res.json({ data })
    } catch (error) {
        next(error)
    }
})

app.get('/contact/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await Schema.contact.find({ _id: id }).lean()
        res.json({ data })
    } catch (error) {
        next(error)
    }
})


app.post('/send-otp', jsonParser, (req, res) => {
    sendOtp(req.body.doc.number, req.body.doc.otp)
})

// Twilio integration

async function sendOtp(number, otp) {
    const accountSid = process.env.accountSid
    const authToken = process.env.authToken
    const client = await new twilio(accountSid, authToken);
    try {
        await client.messages
            .create({
                body: `Your OTP is ${otp}`,
                to: '+917773818396', // here number is hardcoded because twilio trail account cant send sms to unverified number.
                from: '+19788785062',
            })
            .then((message) => console.log(message.sid));
    } catch (error) {
        console.log(error)
    }
}