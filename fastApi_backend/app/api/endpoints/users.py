
import crud.crud_user as user_crud
from database import SessionLocal
from fastapi import APIRouter, Depends, FastAPI, HTTPException
from fastapi.security import OAuth2PasswordBearer, oauth2
from api.sharedLogic import decode_token
# from fastapi.routing import APIRoute
from schemasPydantic import User_schema
from sqlalchemy.orm import Session

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# class UsersRoute(APIRoute):
#     def get_route_handler(self) -> Callable:
#         original_route_handler = super().get_route_handler()

#         async def custom_route_handler(request: Request) -> Response:
#             # before=time.time()
#             response: Response = await original_route_handler(request)
#             # duration= time.time() - before
#             return response

#         return custom_route_handler


router = APIRouter(
    # route_class=UsersRoute
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close

async def get_current_user(token:str = Depends(oauth2_scheme)):
    user=decode_token(token)
    return user

@router.get('/me')
async def get_logged_user(current_user: User_schema.User = Depends(get_current_user)):
    return current_user

@router.get('/auth/')
async def get_auth(token: str = Depends(oauth2_scheme)):
    return{'token': token}

@router.get('/{username}', response_model=User_schema.User)
def get_user(username: str, db: Session = Depends(get_db)):
    # return {'gotten': username}
    # return connection.execute(users.select().where(users.Column.username == username)).fetchall()
    db_user = user_crud.get_user(db, username=username)
    if db_user is None:
        raise HTTPException(status_code=404, detail='user not found')
    return db_user


@router.patch('/update/{username}', response_model=User_schema.User)
def update_user(username: str, new_user: User_schema.UserCreate, db: Session = Depends(get_db)):
    if user_crud.get_user(db, username=username):
        if username != new_user.username:
            if user_crud.get_user(db, username=new_user.username) is None:
                return user_crud.update_user(db, username=username, new_user=new_user)
            raise HTTPException(
                status_code=401, detail='Unhable to change username into an existing one')
        return user_crud.update_user(db, username=username, new_user=new_user)
    raise HTTPException(status_code=401, detail='user does not exist')



@router.post('/login')
def login(user: User_schema.User ):
    #TODO:: ADD LOGIN AND AUTH LOGIC
    return(user)


@router.post('/register', response_model=User_schema.User)
def sign_up(user: User_schema.UserCreate, db: Session = Depends(get_db)):
    db_user = user_crud.get_user(db,  username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail='user already registered')
    return user_crud.create_user(db=db,  user=user)
