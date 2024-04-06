import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {mapStyle} from '../../assets/mapStyle';
import {useAppContext} from '../contexts';
import {Colors} from '../../assets/constants/colors';

export default function MapInfo() {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {appContext?.location && (
          <MapView
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
            style={styles.map}
            customMapStyle={mapStyle}
            showsMyLocationButton
            showsUserLocation
            followsUserLocation
            initialRegion={{
              longitude: appContext.location.longitude,
              latitude: appContext.location.latitude,
              latitudeDelta: 0.0122,
              longitudeDelta: 0.0071,
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    width: '100%',
    height: '80%',
  },

  mapContainer: {
    backgroundColor: Colors.CFFFFFF,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carMarker: {
    width: 35,
  },
});
