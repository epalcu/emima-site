from flask import Blueprint, make_response, redirect, url_for, render_template
from flask_classful import FlaskView, route

class homeController(FlaskView):
    #
    # Constructor
    #
    def __init__(self, dict):
        self.s3Service = dict['s3Service']

    ####################################
    # '/' - Redirects to '/home' page. #
    ####################################
    @route('/')
    def index(self):
        return make_response(redirect('/home'), 302)

    #########################################################
    # '/home' - Home page responsible for displaying posts. #
    #                                                       #
    # 'Referenced In' - 'index.html'                        #
    #########################################################
    @route('/home')
    def home(self):
        return make_response(render_template('home.html'), 200)