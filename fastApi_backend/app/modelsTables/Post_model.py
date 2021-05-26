from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship


from database import Base


class Post(Base):
    __tablename__ = 'posts'
    link = Column(String(255), unique=True, index=True, primary_key=True)
    description = Column(Text, nullable=True)
    likes = Column(Integer, nullable=True)
    poster_username = Column(String(25), ForeignKey("users.username"))

    poster = relationship("User", back_populates="posts")
