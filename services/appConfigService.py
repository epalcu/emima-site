import json
from flask import Flask

class appConfigService():
    #
    # Constructor
    #
    def __init__(self, app, service):
        self.app = app
        self.secretsManagerService = service

    #
    # Public Methods
    #
    def configureApp(self):
        # creds = self.secretsManagerService.getSecretValue("emimaWebsiteEmailCreds")

        self.app.config['MAIL_SERVER'] = "smtp.gmail.com"
        self.app.config['MAIL_PORT'] = 465
        # self.app.config['MAIL_USERNAME'] = creds['username']
        # self.app.config['MAIL_PASSWORD'] = creds['password']
        self.app.config['MAIL_USE_TLS'] = False
        self.app.config['MAIL_USE_SSL'] = True
        self.app.config['S3_BUCKET'] = "emima-website"
        self.app.secret_key = "something"

        return self.app