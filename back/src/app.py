from flask import Flask, jsonify, request
from politician import Politician
from csvReader import read_csv, convert_csv_to_politians

app = Flask(__name__)
@app.route("/")
def hello_world():
    convert_csv_to_politians(read_csv())
    return ""

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
        pol = Politician(request_data)
        #TODO:Insert this data on mongo!
        return pol.__dict__
    return 'request_data is empty'
    

if __name__ == "__main__":
    app.run(debug=True)
    