# MVP List

Midnight Crew Trading is a trusted FX signals provider getting your trading to the level it needs to be. We take the deep research and analysis out of your trading so you can sit back and watch your account grow.

## 1. User Account Credentials & Management
* Users have the ability to sign-up, sign-in, or sign-out of their account
* Users have the ability to delete their account
* Users have the ability to restore their account for a certain number of days before it's lost forever
* Validation errors will be shown where needed on all account management pages
* Certain pages cannot be accessed when not logged in, such as the live signals page or chat forum

## 2. Chat and Discussion Forum
* Users who have signed up can participate in a discussion forum
* The discussion forum will have a range of topics from FX-related or other financial markets to off topic discussions
* Admin users and moderators will police the forum

## 3. FX Signals Page
* Up-to-date real-time signals will be shown on this page
* A platform for admin will be created that allows this page to use it as an API endpoint to get up-to-date trade information
* The platform will easily allow admin to enter trades and exit trades as they would be in real-time

## 4. Sign Up Page
* For signing in, a dropdown on the navbar will be used to allow users to sign in
* For signing up, a complete seperate tab will be used to allow users to enter their information and sign up
* Both the dropdown and the sign up page will leverage OAuth 2.0 to allow users to use Google or Facebook logins
* Validations will be shown at the top of the page when incorrect credentials/invalid strings are entered

## 5. Contact Page
* Contact page will feature a email form where potential users can enter their questions and will be told we'll get back to them
* Our email address will also be featured on the contact us page
* A FAQ page will also be linked for instant help to avoid too many repetitive questions

## 6. Notifying About Cookies
* Due to UK law, a fixed footer telling users we use cookies will be shown on the bottom of all pages
* Once accepted, the fixed footer will be removed
* Research will be conducted for a descriptive message

## 7. Production README
* Production README will be clear, concise, and documentating every integral step of the platform
* It will include a Table of Contents to allow for easier referencing
* It will also have images of the web app and pictures of code that solved important challenges
* Any documents not migrated over as we go from development to production will be added to production README

## 8. Live Hosting on AWS EC2
* Web app will initially be hosted on a free tier of EC2
* Eventually, app will be migrated to a pay as you use based cloud hosting provider

## 9. Dockerizing the App
* MCT will be put on Dockerhub for easier deployment on any machine
* Image will be built as 1.0 when fully ready for production release
* Both Dockerfile and docker-compose files will be created