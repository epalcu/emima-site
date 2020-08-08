import json
import glob
import ast
import boto3

class s3Service():
    #
    # Constructor
    #
    def __init__(self, dict):
        self.client = boto3.client('s3')
        self.bucket = dict['bucket']


    #
    # Private Methods
    #
    