from typing import List
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

import uvicorn
import json
from models import School
import re
import requests
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000",

]

# app middleware to help bypass CORS retrictions
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.mount("/pages", StaticFiles(directory="pages"), name="static")
templates = Jinja2Templates(directory="pages")


with open("gh.json", "r") as data_file:
    data: List[School] = json.load(data_file)

# ====================================================
# WARNING # THIS IS A TEST ROUTE AND SHOULD NOT BE DEPLOYED
@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("home.html", {"request": request, "id": id})
# ====================================================


@app.get("/universities")
async def get_all_universities():
    """a route to return all tertiary institutioons registered in the gh.json db"""
    return data


# http://127.0.0.1:8000/search/name/?name=

@app.get("/search/name/")
async def name_query(name: str):
    """
    This route takes in a name and filters the data by name.
    @return: list of matching names.\n 
    The query string should look like this:
    http://127.0.0.1:8000/search/name/?name

    """
    temp_results = []
    for entry in data:
        if (name in entry['name']) or (name in str(entry["name"]).lower()):
            temp_results.append(entry)
    return temp_results


# http://127.0.0.1:8000/search/region/?region=
@app.get("/search/region/")
async def region_query(region: str):
    """
    This route takes in a region and filters the data by region.
    @return: list of matching regions.\n 
    The query string should look like this:
    http://127.0.0.1:8000/search/region/?region

    """
    temp_results = []
    for entry in data:
        if (region in entry['region']) or (region in str(entry["region"]).lower()):
            temp_results.append(entry)
    return temp_results


# http://127.0.0.1:8000/search/region/?region
@app.get("/search/acronym/")
async def acronym_query(acronym: str):
    """
    This route takes in a acronym and filters the data by acronym.
    @return: list of matching acronyms.\n 
    The query string should look like this:
    http://127.0.0.1:8000/search/acronym/?acronym


    """
    temp_results = []
    for entry in data:
        if (acronym in entry['acronym']) or (acronym in str(entry["acronym"]).lower()):
            temp_results.append(entry)
    return temp_results

# http://127.0.0.1:8000/universities/{acronym}
# @app.get("/universities/{acronym}")
# async def acronym_query(acronym):
#     """query the db given an acronym """
#     for entry in data:
#         if (entry['acronym'] == acronym) or (str(entry['acronym']).lower() == acronym):
#             return entry

# http://127.0.0.1:8000/universities/{region}


# @app.get("/universities/{region}")
# async def acronym_query(region):
#     """query the db given an acronym """
#     for entry in data:
#         if (entry['region'] == region) or (str(entry['region']).lower() == region):
#             return entry

# http://127.0.0.1:8000/universities/query/?region=''&acronym=''
@app.get("/universities/query/")
async def region_query(region=None, acronym=None):
    temp_list = []
    for entry in data:

        if (entry['region'] == region) or (entry['acronym'] == acronym or str(entry["acronym"]).lower() == acronym):
            temp_list.append(entry)
    return temp_list



if __name__ == '__main__':
    uvicorn.run(app, port=8080)

