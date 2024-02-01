const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


app.get('api/search',(req,res)=>{
    res.sendDate()
})
const url = 'https://github.com/Deepeshgiri';
fetch(url)
.then(response => {
  // Check if the request was successful (status code 200-299)
  if (!response.ok) {
    throw new Error(`Network response was not ok, status code: ${response.status}`);
  }

  // Return the HTML content as text
  return response.text();
})
.then(html => {
  // Use DOMParser to parse the HTML string
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Extract data from the parsed HTML
  const titleElement = doc.querySelector('title');
  const pageTitle = titleElement ? titleElement.textContent : 'No title found';

  // Display the extracted data
  console.log('Page Title:', pageTitle);
})
.catch(error => {
  // Handle errors during the fetch
  console.error('Error during fetch:', error);
});
app.listen(4000, ()=>{
    console.log(`app is runnuing at port no 4000`)
})