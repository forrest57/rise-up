
from sqlalchemy.orm import Session
from modelsTables import User_model
from schemasPydantic import User_schema


def get_user(db: Session, username:  str):
    user = db.query(User_model.User).filter(
        User_model.User.username == username).first()
    # print(user)
    return user

def create_user(db: Session, user: User_schema.UserCreate):
    to_hash_password = user.password  # TODO:: add jwt w/pass hashing
    db_user = User_model.User(
        username=user.username, password=to_hash_password, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def update_user(db: Session,username:str, new_user: User_schema.UserCreate):
    db.query(User_model.User).filter(
        User_model.User.username == username).update({'username': new_user.username,
                                                  'email':new_user.email,
                                                  'img':new_user.img,
                                                  'password':new_user.password})
    db.commit()
    return new_user
    
