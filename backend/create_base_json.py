import json
from SPARQLWrapper import SPARQLWrapper
from hashlib import md5
import urllib.request

map = {}
thumbs = []


collection_url = "https://nakamura196.github.io/kunshujo-i/collection/collection.json"

response = urllib.request.urlopen(collection_url)
response_body = response.read().decode("utf-8")
collection = json.loads(response_body)

collections = collection["collections"]

for c in collections:

    collection_uri = c["@id"]
    print(collection_uri)

    response = urllib.request.urlopen(collection_uri)
    response_body = response.read().decode("utf-8")
    c_obj = json.loads(response_body)

    curations = c_obj["curations"]

    for i in range(len(curations)):
        print(i)

        curation_url = curations[i]["@id"]

        print(curation_url)

        response = urllib.request.urlopen(curation_url)
        response_body = response.read().decode("utf-8")
        curation = json.loads(response_body)

        selections = curation["selections"]

        for selection in selections:
            members = selection["members"]
            if "@label" in selection["within"]:
                label = selection["within"]["@label"]
            else:
                label = selection["within"]["label"]

            attribution = "東京大学"

            if "張交帖" in label:
                attribution = "国立国会図書館"

            for j in range(len(members)):
                member = members[j]

                thumbnail = member["thumbnail"]

                if thumbnail not in thumbs:
                    thumbs.append(thumbnail)

                id = member["@id"]

                if attribution == "東京大学":
                    page = id.split("canvas/p")[1].split("#")[0]
                else:
                    page = id.split("canvas/")[1].split("#")[0]

                hash = md5(id.encode('utf-8')).hexdigest()

                type = "自動"
                if "manual" in collection_uri:
                    type = "手動"

                map[hash] = {
                    "thumbnail": thumbnail,
                    "id": hash,
                    "url": "http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation="+curation_url+"&pos="+str(j+1),
                    "label": label+" p."+page,
                    "metadata": [
                        {
                            "label": "所蔵",
                            "value": attribution
                        },
                        {
                            "label": "帖名",
                            "value": label
                        },
                        {
                            "label": "抽出方法",
                            "value": type
                        }

                    ]
                }


fw2 = open("data/base.json", 'w')
json.dump(map, fw2, ensure_ascii=False, indent=4,
          sort_keys=True, separators=(',', ': '))

print("画像総数：")
print(len(thumbs))
