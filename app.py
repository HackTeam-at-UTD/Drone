from flask import Flask
import s3upload

app = Flask(__name__)
@app.route('/upload')
def upload_file():
    # Call the s3upload.py script here
    s3upload.main()

    # Return a response to the client
    return 'File uploaded successfully!'
if __name__ == '__main__':
    app.run()
