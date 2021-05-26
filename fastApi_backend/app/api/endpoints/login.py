from datetime import timedelta
from fastapi import APIRouter
from typing import Any
from fastapi.routing import APIRoute
# from fastapi import APIRouter, Body, Depends, HTTPException
# from fastapi.security import OAuth2PasswordRequestForm
# from sqlalchemy.orm import Session

# from app import crud, models, schemas
#TODO:: keep adding from here


class LoginRoute(APIRoute):
    pass


router = APIRouter(route_class=LoginRoute)
