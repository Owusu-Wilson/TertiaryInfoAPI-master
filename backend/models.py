from pydantic import BaseModel
from typing import List


class School(BaseModel):
    web_pages: List[str]
    name: str
    acronym: str
    alpha_two_code: str
    town: List[str]
    region: str
    country: str
