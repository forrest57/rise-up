
from sqlalchemy.orm import Session
from modelsTables import Post_model
from schemasPydantic import Post_schema


def get_post(db: Session, link:  str):
    post = db.query(Post_model.Post).filter(
        Post_model.Post.link == link).first()
    # print(user)
    return post


def create_post(db: Session, post: Post_schema.PostCreate):
    db_post = Post_model.Post(
        link=post.link, description=post.description, poster_username=post.poster_username)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post


def update_post_description(db: Session, description: str, link:str):
    db.query(Post_model.Post).filter(
        Post_model.Post.link == link).update({'description':description})
    db.commit()
    return {'new description': description}

def delete_post(db: Session, link: str, authstr: str):
    post=db.query(Post_model.Post).filter(Post_model.Post.link == link)
    db.delete(post)
    db.commit()
    return{'successfully deleted the post ':link }