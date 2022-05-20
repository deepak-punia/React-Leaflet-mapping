##React-Leaflet-mapping

####This project uses :
    - leaflet maps https://leafletjs.com/
    - Open Disease Data API https://disease.sh/

- Fetch API data on load using useEffect hook
- Set data with useState hook
- Load data on Leaflet map to create Markers
- Pass data to Maps > Makers to create Marker popups with data
- More countries can be added in App.js > countryList array

####Users Guide
 - User can click on markers on map to view data
  - Country name
  - Total cases
  - Today cases
  - recovered
 - User can close the marker popup and repeat the process on new marker
 ![This is an image](https://github.com/deepak-punia/React-Leaflet-mapping/blob/main/src/img/first.png?raw=true)
 - User can add country on homepage with input field
    - country name is validated
    - if country is valid,
        Parent component state is changed, hence component rerender
        New Marker is added to map with country data
        ![This is an image](https://github.com/deepak-punia/React-Leaflet-mapping/blob/main/src/img/second.png?raw=true)
    - if country is not valid alert is displayed on screen.
    ![This is an image](https://github.com/deepak-punia/React-Leaflet-mapping/blob/main/src/img/third.png?raw=true)