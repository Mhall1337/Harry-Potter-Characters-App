This app was created for an easy way to find out fun details about your favorite Harry Potter Characters. To get started, click on the "All Characters" button on the top of the screen. This will take you to a complete list of all characters from the Harry Potter collection. There is a search bar at the top left of the screen where you can type to search for your favorite character. Once you find who you want to add, click the "Add to Favorites" button. This button will add your favorite character to the database and be displayed in the "Favorite Characters" component. After adding all your favorite characters, click on the "Favorite Characters" button on the top of the screen and you will find each selected character, along with some details from the API about them. Lastly, to remove a character from your favorites list, simply click the "Remove From Favorites" button.

For this app to work, the use of JSON Server is required. 
If you do not have JSON Server installed, execute the following command in your terminal, if you do, skip this step and start the server:

npm install -g json-server

After it is installed, navigate to the harry-potter-app directory and start the server with the following command:

json-server --watch db.json

Now, all db.json information will be available and any changes made to the inventory via the app will be saved there.

To exit the json server, enter ctrl + c into the terminal.

Additionally, we will need to start the front end server. To do so, enter the following command:

npm start

Make sure this server is not running on the same port as your back-end JSON server. When prompted to run on another port, type "Y"