# Matthew Brozen Hulu Code Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Instructions

Clone the Repp

npm install

npm start

For a production build use: npm run build

### Components

This React application uses three components; the Masthead component, the FirstThree component and the SimpleContact component. 

#### Masthead Component

This is a standard key visual component with the show title and a show background image with a color gradient. 

##### Further Masthead Development

This component could be enchanched by first pulling the data from JSON instead of being hard coded, adding in conditional rendering for other elements like a show poster play button etc., also conditional rendering for video background vs the background image currently used and adding in transition animation effects. 

#### FirstThree Component

This is a standard card display component where each card contains the shows episode image, title and number.

##### Further FirstThree Development

If the amount of cards is variable then the three card layout won't look the same. This can be handled by turning the episode card to be a stateless component that takes in the array of episodes and iterates them within the card row for however many episodes there are. Also implementing a sliding functionallity so that only a certain number of cards display until you swipe or click a arrow. 

#### SimpleContact Component

This is a standard form component that takes in the users name, email and message then emails those to Alyssa Saucedo at alyssa.saucedo@hulu.com using [EmailJS](https://www.emailjs.com/)

##### Further SimpleContact Development

EmailJS is a paid service that allows you to send emails from client side code. A better approach to this would be a build a API with nodemailer or comparable free backend email sending service. This would change the component by changing the EmailJS code in a API call. Another improvement would be storing the user input before being submitted within the form if the user navigates aways from the page. 

