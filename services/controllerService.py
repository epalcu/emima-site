from controllers.homeController import homeController
from controllers.contactController import contactController
from controllers.aboutController import aboutController
from controllers.servicesController import servicesController

class controllerService():
    #
    # Constructor
    #
    def __init__(self, app, dict):
        self.app = app
        self.init_argument = dict
        
    #
    # Public Methods
    #
    def registerControllers(self):
        homeController.register(self.app, init_argument=self.init_argument, route_base='/')
        contactController.register(self.app, init_argument=self.init_argument, route_base='/')
        aboutController.register(self.app, init_argument=self.init_argument, route_base='/')
        servicesController.register(self.app, init_argument=self.init_argument, route_base='/')