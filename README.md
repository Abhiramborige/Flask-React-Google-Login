## Client side: React:
### Steps:
1. create .env file 
  ```
    REACT_APP_BACKEND_URL= http://localhost:5000
  ```
2. Use the commands to start the app locally.
  ```
    cd google-login-react
    npm install
    npm start
  ```

## Server side: Flask:
### Steps:
1. create .env file 
  ```
    DB_NAME=
    CLUSTER_URL=
    GOOGLE_CLIENT_ID=
    SECRET_KEY=HelloAll
    ALGORITHM=HS256
    PROJECT_ID=
    BACKEND_URL=http://127.0.0.1:5000
    FRONTEND_URL=http://localhost:3000
  ```
2. Go to https://console.cloud.google.com/ and create client secrets and configuration file
  ```
    cd flask-server-google
    pip install virtualenv
    virtualenv google_env
    cd google_env/Scripts
    activate
    pip install -r requirements.txt
  ```