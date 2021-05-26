from fastapi import APIRouter, Depends, HTTPException
from .users import get_db
from sqlalchemy.orm import Session
from schemasPydantic import Post_schema
from crud import crud_post as crud


router = APIRouter()


@router.get('/{link}', response_model=Post_schema.Post)
def get_post(link: str, db: Session = Depends(get_db)):
    db_post= crud.get_post(db, link)
    if db_post is None:
        raise HTTPException(status_code=404,detail='post not found')
    return db_post


@router.patch('/update/{link}')
def update_description(link: str, description: str, db: Session = Depends(get_db)):
    return


@router.post('/add', response_model=Post_schema.Post)
def add_post(post: Post_schema.PostCreate, db: Session = Depends(get_db)):
    return


@router.delete('/remove/{link}')
def remove_post(link: str, authstr: str, db: Session = Depends(get_db)):
    return
