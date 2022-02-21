
from flask import Flask, request
from flask_cors import CORS
from mongo_service import find_politician, initializeDB, edit_politician, get_politician_list
from politician import Politician


app = Flask(__name__)
CORS(app)
mycol = initializeDB()

@app.route("/politician/", methods=['POST'])
def create_politician():
    """
    Endpoint to create a politician by the body request

    Args:
    Returns:
        politician(dict): Dictionary with the politician created (Provisional, then it may send OK - 200)
    """
    request_data = request.get_json()

    #Check if there is request_data
    if request_data:
        pol = Politician.from_request(request_data)
        #Insert this data on mongo!
        mycol.insert_one(pol.__dict__)
        return "Politician created correctly"
    return 'request_data is empty'

@app.route("/politician/<id>", methods=['GET'])
def get_politician(id:str):
    """
    Method to get a politician by its id

    Args:
        id(str): Unique identifier of the politician
    Returns:
        message(str): Possible message (error / success)
    """
    return find_politician(id)

@app.route("/politician/<id>", methods=["PATCH"])
def edit_politician_call(id:str):
    """
    Method call to request an edit on a politician

    Args:
        id(str): Unique identifier
        politician(politician): Politician on the body of the request
    Returns:
        message(str): Message to get
    """
    request_data = request.get_json()

    #Check if there is request_data
    if request_data:
        pol = Politician.from_request(request_data)
        edit_politician(id, pol)
        return "Politician edited correctly"
    
    return "Politician editing error: Not request data"

@app.route("/politician/list/<page>", methods=["GET"])
def get_politician_list_call(page:int):
    return get_politician_list(int(page))

if __name__ == "__main__":
    app.run(debug=True)
    