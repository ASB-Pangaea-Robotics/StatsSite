import datetime
import json
import os

import requests
import dotenv

# Deprecated since that API is no longer being used. Left in case we do switch back to it.
#
# dotenv.load_dotenv()
#
# token = os.getenv("TOKEN")


test_id = 21971


def get_team_data(team_id: int, operation: str, *args: list[str]) -> dict:
    url = "https://api.ftcscout.org/rest/v1"
    match operation:
        case "general":
            return dict(requests.get(f"{url}/teams/{team_id}").json())
        case "previous_season_stats":
                return dict(requests.get(f"{url}/teams/{team_id}/quick-stats?season={str(int(datetime.datetime.now().year)-1)}").json())
        case _:
            return {"fail": "Please give a valid operation"}

print(get_team_data(21971, "previous_season_stats"))

