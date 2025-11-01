from datetime import datetime

import dotenv
import flask
from flask import render_template

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

@app.route('/test/<team_id>')
def test(team_id):
    time = datetime.now().year -1
    data = get_team_data(team_id, "previous_season_stats")
    return_data = {time: data}
    return render_template('test.html', team=return_data)




app.run(debug=True)