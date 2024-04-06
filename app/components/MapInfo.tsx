import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {mapStyle} from '../assets/mapStyle';
import {useAppContext} from '../contexts';

export default function MapInfo() {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Around you</Text>

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
  container: {},
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  mapContainer: {
    backgroundColor: '#dde2e3',
    height: 200,
    marginVertical: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carMarker: {
    width: 35,
  },
});
