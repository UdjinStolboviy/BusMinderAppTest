import {useState} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export default function useLocation() {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  async function getPermission() {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    if (permissionStatus === 'granted') {
      Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setCurrentLocation({latitude, longitude});
        },
        error => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
        },
      );
    }
  }

  return {currentLocation, getPermission};
}
