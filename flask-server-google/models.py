
from mongoengine.document import Document
from mongoengine.fields import EmailField, ImageField, IntField, StringField, UUIDField

# inheriting from Document class
class User(Document):
    meta = {"collection": "User"}
    uuid=UUIDField()
    username=StringField(required=True, max_length=100)
    password=StringField(required=True, max_length=100, default="LOGGEDINWITHGOOGLE")
    picture=StringField(required=True)
    email=EmailField()

  
