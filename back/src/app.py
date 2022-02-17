from flask import Flask
from csvReader import read_csv, convert_csv_to_politians

app = Flask(__name__)
@app.route("/")
def hello_world():
    convert_csv_to_politians(read_csv())
    return ""

if __name__ == "__main__":
    app.run(debug=True)
    