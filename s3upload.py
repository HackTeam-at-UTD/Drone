import boto3
from botocore.exceptions import NoCredentialsError

ACCESS_KEY = 'AKIAUUU75BVAQTAH2Z7G'
SECRET_KEY = '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'


def upload_to_aws(local_file, bucket, s3_file):
    s3 = boto3.client('s3', aws_access_key_id=ACCESS_KEY,
                      aws_secret_access_key=SECRET_KEY)

    try:
        s3.upload_file(local_file, bucket, s3_file)
        print("Upload Successful")
        return True
    except FileNotFoundError:
        print("The file was not found")
        return False
    except NoCredentialsError:
        print("Credentials not available")
        return False


uploaded = upload_to_aws('../3-1.jpg', 'dronemlinputbucket', 'droneImages')