import requests
import json
import re
import xml.etree.ElementTree as ET
import sys

if __name__ == "__main__":
    print(pullBGGData(1))
    sys.stdout.flush()


def pullBGGData(num_of_pages):
    #Generate a new JSON object to populate
    json_struct = []

    #loop for the sets of 100 boardgames
    for page in range(num_of_pages):
        url = 'https://boardgamegeek.com/browse/boardgame/page/' + str(page + num_of_pages)

        #Through get request get page content
        page = requests.get(url)

        #Return list of id's with extra text
        id_list_dirty = re.findall('a href="/boardgame/[0-9]*/', page.content)

        #Cleans the list for just the id
        id_list = []
        for id_dirty in id_list_dirty:
            id_list.append(re.search('[0-9]+', id_dirty).group())

        #make substruct
        for id_val in id_list:
            boardgame = {}

            #Pull in data for particular game from BGG API
            id_details = ET.fromstring(requests.get('https://api.geekdo.com/xmlapi2/thing?id=' + id_val + '&stats=1').content)[0]
            
            #If failed then retry
            while id_details.tag != "item":
                id_details = ET.fromstring(requests.get('https://api.geekdo.com/xmlapi2/thing?id=' + id_val + '&stats=1').content)[0]

            #Store general information
            boardgame["name"] = id_details.find("name").attrib["value"]
            boardgame["yearpublished"] = id_details.find("yearpublished").attrib["value"]
            boardgame["minplaytime"] = id_details.find("minplaytime").attrib["value"]
            boardgame["maxplaytime"] = id_details.find("maxplaytime").attrib["value"]

            #Get stat values
            stats = id_details.find("statistics").find("ratings")

            boardgame["rank"] = stats.find("ranks").find("rank").attrib["value"]
            boardgame["weight"] = stats.find("averageweight").attrib["value"]

            #Handle storage of player counts
            player_counts_raw = id_details.find("poll")

            player_counts = []
            ideal_player_counts = []
            absolute_best_total = 0
            absolute_best_playercount = 0

            for player_count in player_counts_raw:

                best = player_count[0].attrib["numvotes"]
                recommended = player_count[1].attrib["numvotes"]
                bad = player_count[2].attrib["numvotes"]         

                #Stores the count for all cases
                player_counts.append(player_count.attrib["numplayers"])

                #Determine if the number is more recommended then not
                if int(best) + int(recommended) > int(bad):
                    ideal_player_counts.append(player_count.attrib["numplayers"])

                #Store best possible player count
                if best > absolute_best_total:
                    absolute_best_total = best
                    absolute_best_playercount = player_count.attrib["numplayers"]

            #Store player counts and "ideal" counts
            boardgame["playercounts"] = player_counts
            boardgame["idealplayercounts"] = ideal_player_counts
            boardgame["bestplayercount"] = absolute_best_playercount

            json_struct.append(boardgame)

    return json_struct

    # with open("boardgames.json", "w") as write_file:
    #     json.dump(json_struct, write_file)