from dotenv import load_dotenv
from mongoengine import connect
from models import User
import uuid
import os

def connect_db():
    try:
        load_dotenv()
        connect(host=os.getenv("CLUSTER_URL"))
        print("Database cluster connected")
    except Exception as e:
        print(e.args)



def insert_into_db(username, email, picture):
    try:
        try:
            user = User.objects.get(username=username)
            print({"_id": str(user["id"]), "message": "User already exists"})
        except:
            new_user = User(
                username=username, 
                uuid=uuid.uuid4().hex,
                email=email,
                picture=picture
            )
            new_user.save()
            print({"_id": str(new_user["id"]), "message": "User created"})
    except Exception as e:
        print({"error": e.args})