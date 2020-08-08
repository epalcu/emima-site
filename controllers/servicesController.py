from flask import Blueprint, make_response, redirect, url_for, render_template, request, jsonify
from flask_classful import FlaskView, route

class servicesController(FlaskView):
    #
    # Constructor
    #
    def __init__(self, dict):
        self.s3Service = dict['s3Service']

    @route('/services/hours')
    def calendarHours(self):
        hours = [
            '9-9:45',
            '10-10:45',
            '11-11:45',
            '12-12:45',
            '13-13:45',
            '14-14:45',
            '15-15:45',
            '16-16:45',
            '17-17:45',
            '18-18:45',
            '19-19:45',
            '20-20:45',
            '21-21:45',
            '22-22:45',
            '23-23:45'
        ]

        return make_response(render_template('includes/hoursList.html', hours=hours), 200) 