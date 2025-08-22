require('dotenv').config()
console.log("Loaded Gemini API Key:", process.env.GEMINI_API_KEY);

const app = require('./src/app')



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})