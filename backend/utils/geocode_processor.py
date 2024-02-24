import pandas as pd
from geopy.geocoders import Nominatim


def get_coordinates(city_name):
    geolocator = Nominatim(user_agent="city_name_geocoder")
    location = geolocator.geocode(city_name)
    if location:
        return location.latitude, location.longitude
    else:
        return None

if __name__ == "__main__":
    city_name = "New York"
    coordinates = get_coordinates(city_name)
    if coordinates:
        print(f"Coordinates of {city_name}: Latitude = {coordinates[0]}, Longitude = {coordinates[1]}")
    else:
        print(f"Coordinates of {city_name} not found.")