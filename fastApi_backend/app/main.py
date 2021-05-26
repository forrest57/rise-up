from fastapi import FastAPI,Depends
from api.api import api_router
from database import engine
from modelsTables import User_model, Post_model

User_model.Base.metadata.create_all(bind=engine)
Post_model.Base.metadata.create_all(bind=engine)

app = FastAPI(title='riseUp')




app.include_router(api_router, prefix='/api')
# if settings.BACKEND_CORS_ORIGINS:
#     app.add_middleware(
#         CORSMiddleware,
#         allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
#         allow_credentials=True,
#         allow_methods=["*"],
#         allow_headers=["*"],
#     )

# app.include_router(api_router, prefix=settings.API_V1_STR)
