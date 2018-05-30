
Project name:
    New York Inn

Keywords:
    New York, Find, University, Housing

Description of datasets:
    1. Neighborhood Names GIS. 
        link: https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD
        data type: Json
        data columns used: the_geom, Stacked, AnnoLine1.
        data amount: 299
    2. NY Districts geoshapes.
        link: https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson
        data type: geoJson
        data columns used: BoroCD, Geometry
        data amount: 71
    3. Crimes in NY.
        link: https://data.cityofnewyork.us/resource/9s4h-37hy.json
        data type: Json
        data columns used: CMPLNT_NUM, BORO_NM, OFNS_DESC, LATITUDE, LONGITUDE, CMPLNT_FR_DT
        data amound: 1000
    4. Dataset contains information on New York City housing by building data.
        link: https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD
        data type: Json
        data columns used: Project ID, Project Name, BBL, Latitude, Longitude, Extremely Low Income Units
        data amount: 702
    5. New York City Museums.
        link: https://data.cityofnewyork.us/api/views/fn6f-htvy/rows.json?accessType=DOWNLOAD
        data type: Json
    6. New York Art gallery
        link: https://data.cityofnewyork.us/api/views/43hw-uvdj/rows.json?accessType=DOWNLOAD
        data Tupe: Json
            

Description:
    This App provides information and recommendations about accomodations in New York for the NYU Stern School of Business students. This system uses  distance parameters and district filters to accomplish its goal and will make use of crime databases and another parameters. It makes use of maps ,makes use of charts and will make use of diagramas to make it easier for students to use the App. The App now mekes use of a table to show the districts by their distance to the University, their afforability and their security. The App is in the third stage, so its interface and functionality will be improved.

    
Structured description:
    Map View:
        Y. Basic Map with specific location (your map is located in a meaningful place, city of west lafayette for example)
        Y. Any cover on the map (for example, cloud cover to show the weather effect)

    Data Visualization:
        N.  Use Graph? What is the type? (bar chart, pie chart, radar chart ...)
        N. Any interaction available on the graph? List them (enable click on numbers, drag on lines, change time/variables ...)

    Interaction Form:
        Y. Any information output? list them. (text field, text area, label, plain HTML ...)
        Y.  Any operation option (filters)? List them. (search markets, search vegetables, filter based on price, sort based on convenience ...)
            1. Draw in the map all the districts.
            2. Search housing by borough.
            3. Search housing by distance from the university.
        Y. Any information input? List them. (comments, markers, user preference ...)
            1. Desired distance from the university.
            2. Desired borough.
        Y. Interaction with Map? List them. (filter on price will affect map markers, sort on price will affect map markers, ...)
            1. Draw in the map all the districts.
            2. Search housing by borough.
            3. Search housing by distance from the university.
        Y. Interaction with data visualization? List them. (filter, sort, set variables ...)

Test Case:
    Browser:
        -Google Chrome
        -Mozilla Firefox

Author: Cristhian Camilo Gomez Neira

