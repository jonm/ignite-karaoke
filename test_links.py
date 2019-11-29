#!/usr/bin/env python3

import http
import json
import requests

def test_links():
    file_contents = open('images.js').read()
    de_javascripted = file_contents.strip().lstrip('var local_images =').rstrip(';')
    links = json.loads(de_javascripted)

    broken = []
    for link in links:
        if link.startswith("./"): continue # local images
        print(link, " ... ", end = "")
        try:
            resp = requests.head(link, timeout=2)
            if resp.status_code == http.HTTPStatus.OK:
                print("OK")
            else:
                print("BROKEN")
                broken.append(link)
        except:
            print("TIMEOUT")
            broken.append(link)

    if len(broken) > 0:
        print("\nBROKEN LINKS")
        print("============")
        for link in broken: print(link)
            
    assert len(broken) == 0
    
