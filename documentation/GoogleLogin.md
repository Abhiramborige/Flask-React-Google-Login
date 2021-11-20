### FRONTEND 

### Components
From React the functional Components are 
1. Sign In(default component)
2. Logged In (default component)
3. App.js (App default Component, BACKEND_URL const)

### App.js (Routes)
(renders 1 and 2 based on routes and data it receives while rendeeing).
Logged in contains the details of the current logged in user as its state value.
Signin is the home page through which user clicks on "Login with Google".


### Functions 
1. handleClick (App.js) : 
The Backend Url which is from the env file "{BACKEND_URL}" which exported in App.js
                redirects to : auth_url (from the backend "/auth/google" route)
### Input Parameters
By props from (Signin.js) this function is triggered and a new JWT(key) and JWT token is generated as an key value pair

2. query and token (useEffect from App.js): 
The JWT token is stored in here in the name of 'jwt' as a key value pair and we use query for searching and token for getting the value
                then we are saving it in local storge as a key value pair
                ("JWT":"")

3. useEffect (Signin.js) :
It Checks the local storage before it proceeds if the JWT is available it 
                redirects to "/home" 

4. useEffect (loggedIn.jsx) :
It takes the data from the DB and get the name and profile picture of the user and by using state we are accessing it

5. handlelogout (loggedIn.jsx):
It deletes the JWT key and value pair and takes the user to the ("/login")
                




### BACKEND

### Decorator:
1. login_required(): Used to decide whether to call home function or not based on wrapper function inside it. Checks for header in the request it receives and decides whether to continue or abort the user request.

### Functions:
1. Generate_JWT(payload): 
  * Returns JWT encoded token based on JSON payload it received in the function call.
2. callback(): This function is called when user tries to signin with his/her google account for our web application. When user signin's with his/her google credentials, and clicks on continue, this callback function is called. A session with key value pair as 'google_id' and 'sub' value. 
Here we insert the required data into database also by calling  insert_into_db(name email, picture).
  * Returns a redirect to frontend web page to '/home' route with a key value pair as 'jwt' and token respectively. 
3. insert_into_db(name:string, email:string_email, picture:string_link): This function inserts the data that it receives from arguments into the database collection. It will try to check for user with same username in database and if not present, will throw an error, which will be caatched by except block and creates a new user in collection.
4. login(): This processes the flow from google using credential JSON file from console.cloud.google.com and sets that state in the session. 
  * Returns the AuthURL so as to redirect the frontend to the URL and make user choose account or signin with google account.
5. home_page_user(): This function will decode the JWT token that it receives from Authorization header 
  * Returns the JSON data of user after decoding as response to frontend.
6. logout(): This function clears the sessions present in the server side.
  * Returns message 'LoggedOut' after clearing the sesison in server.