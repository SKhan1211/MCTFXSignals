# Design Choices

## Backend (server-side)
* The choice of **Ruby on Rails** framework was made over other options like **Node.js/Express.js** or **Java/Spring** because the app should be deployed as quickly as possible.
* Using **PostgreSQL** as a database over noSQL databases because it allows more flexibility, stability, speed for querying, and relational data.
* **Puma** was chosen as the app server because it is the default app server that comes with Rails. **Nginx** will be used as a web server when deploying to **AWS EC2** because it is a popular option known for it's scalability.

## Frontend (client-side)
* **React.js** was chosen for the frontend due to making code reusable and simplifying many things compared to **vanilla JavaScript** or **jQuery**. It also allows ease of use compared to other view layer libraries such as **Angular.js** or **Vue.js**.
* **Redux** and it's libraries were used for state management as it is a powerful tool that allows us to access state anywhere in our app. It is also easy to use for simpler apps and requires less configuration.

## Services
* **Docker** will be used as a virtual container so that it can be used across machines with no issues. Eventually, the EC2 instance running the production app will be switched over to a Dockerized version.

## Testing
* **Jest/Enzyme** go well together when as a test framework when testing a React.js/JavaScript setup. **RSpec Rails** is also a powerful testing option for **Ruby on Rails**.
* A combination of **Faker** and **FactoryBot** will be used to quickly setup dummy data for testing.
* **Capybara** is going to be used for integration tests because it makes it easy to simulate how a user interacts with the application
