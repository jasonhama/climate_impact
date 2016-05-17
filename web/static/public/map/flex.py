import requests
import json

data = requests.get("http://eric.clst.org/wupl/Stuff/gz_2010_us_050_00_20m.json").json()
#data = requests.get("https://storage.googleapis.com/maps-devrel/google.json").json()

input_dict = data['features']
output_dict = [x for x in input_dict if x['properties']['STATE'] == "53"]
data['features'] = output_dict

with open("washington.json","w") as json_file:
    json.dump(data, json_file)