import dotenv
import flask
from py.api_wrapper import get_team_data

app = flask.Flask(__name__)

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/insights')
def insights():
    return flask.render_template('insights.html')

@app.route('/search')
def search():
    return flask.render_template('search.html')


app.run(debug=True)