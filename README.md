# mygalary
This Repo contains both frontend an backend. I've created this for practice <br/>
This application is a simple online galary. Here you can upload images only and on clicking on image it will open in full screen on another tab.
for storage, I used `cloudinary` 

### Frontend :
frontend is in react js and also I've used material-ui and axios in this app. <br/>
cloudinary services are used in frontend.

To use this application frontend on your local---<br/>
first clone this repo <br/>
after cloning go to the `image-galary-frontend` directory <br//> 
and run command ```npm install``` to install all the requirements <br/>

within this you need to create `cloudinary` setup, as follows-- <br/>
go to cloudinary.com and login first to cloudinary <br/>
copy `api_base_detai` from dashbord  and use in files.js component to fetch url. <br/>
go to `setting` -> then to `upload` and create a upload_preset by clicking `add upload_preset` and use your detail to files.js component.

after doing all the setup, run `npm start` to run the application and visit http://localhost:3000/ on your browser.

### backend :
backend is in Node js (express and mysql database with sequelize-migration )
to run backend first install all the requirements by `npm install` command and <br/>
then run command `nodemon server.js` if you have nodemon already installed otherwise install `nodemon` by command <br/>
```sudo npm install -g nodemon```  or run `node server.js` <br/>
