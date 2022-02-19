
from pymongo import MongoClient
from politician import Politician
from csvReader import convert_csv_to_politians, read_csv
from bson import json_util
from bson.objectid import ObjectId
from bson.json_util import RELAXED_JSON_OPTIONS

mongodb_client = MongoClient("mongodb://root:example@mongo:27017/")
mydb = mongodb_client['newtral']
mycol = mydb['pol']

CONST_PAGE_SIZE = 50

#Mongo db client
def initializeDB():
    """
    Initializes a mongo db and a mongo collection for politicians using pymongo
    """
    if mycol.estimated_document_count() == 0:
        politicians = convert_csv_to_politians(read_csv())
        for politician in politicians:
            mycol.insert_one(politician.__dict__)

    return mycol

def find_politician(id:str):
    """
    Finds a politician using its id
    Args:
        id(str): Unique identifier of the politician
    Returns:
        politician(Politician): Result of the find on mongo client
    """
    politician = mycol.find_one({"_id": ObjectId(id) })
    return json_util.dumps(politician, json_options=RELAXED_JSON_OPTIONS)

def edit_politician(id:str, politician:Politician):
    """
    Edits a politician using its id and a body
    Args:
        id(str): Unique identifier of the politician
        politician(politician): Politician to edit
    Returns:
        nothing
    """
    if politician:
        old_pol = mycol.find_one({"_id": ObjectId(id) })
        print(type(old_pol))
        print(type(politician))
        mycol.update_one(old_pol, {"$set": politician.__dict__})
    
    return "Politician edited correctly"

def get_politician_list(page:int):
    politician_list = mycol.find().skip(int(CONST_PAGE_SIZE * page)).limit(CONST_PAGE_SIZE)
    return json_util.dumps(politician_list, json_options=RELAXED_JSON_OPTIONS)
        
    
    



