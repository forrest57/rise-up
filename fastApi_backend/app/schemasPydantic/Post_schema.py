from typing import Optional
from pydantic import BaseModel


class PostBase(BaseModel):
    description: Optional[str] = None
    link: str
    poster_username: str


class PostCreate(PostBase):
    pass


class Post(PostBase):

    likes: Optional[int] = 0
    class Config:
        orm_mode = True
