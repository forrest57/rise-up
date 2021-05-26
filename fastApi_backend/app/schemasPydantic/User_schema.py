from .Post_schema import Post
from typing import Optional, List
from pydantic import BaseModel


class UserBase(BaseModel):
    username: str
    email: Optional[str] = None
    img: Optional[str] = None
    

class UserCreate(UserBase):
    password: str


class User(UserBase):
    posts: List[Post] = []

    class Config:
        orm_mode = True

