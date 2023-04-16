from flask import Flask
import s3upload

app = Flask(__name__)

@app.route("/numberOfWaterBottles")
def numberOfWaterBottles():
    return {"numberOfWaterBottles": ["bottle1", "bottle2", "bottle3"]}

@app.route('/upload')
def upload_file():
    # Call the s3upload.py script here
    s3upload.main()


if __name__ == "__main__":
    #s3upload.main()
    app.run(debug=True)