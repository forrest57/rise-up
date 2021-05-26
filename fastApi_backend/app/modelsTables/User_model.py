from sqlalchemy import Table, Column, Integer, String
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    __tablename__ = 'users'

    # id = Column(Integer, primary_key=False, index=False,
    #             unique=True, autoincrement=True)
    username = Column(String(25), primary_key=True, unique=True, index=True)
    email = Column(String(180),nullable=True)
    password = Column(String(180))
    img = Column(String(255),nullable=True)

    posts = relationship('Post', back_populates='poster')
