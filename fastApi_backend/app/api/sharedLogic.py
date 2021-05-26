from schemasPydantic.User_schema import User


def decode_token(token):
    return User(username=token+'hehexd', email='example')

