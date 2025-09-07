import dotenv
import base64
import os

class FTC_API:
    def __init__(self):
        dotenv.load_dotenv()
        token_str = f"{os.getenv("USER")}:{os.getenv("AUTH_TOKEN")}"
        self.AUTH = base64.b64encode(token_str.encode()).decode("utf-8")

