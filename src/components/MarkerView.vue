<template>
  <div id="mapbox" ref="el" class="h-full w-full" dir="ltr" />
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'

const props = defineProps<{
  coordinates: mapboxgl.LngLatLike
  zoom: number
}>()
const el = ref()
const mapbox = ref()

onMounted(async () => {
  mapbox.value = new mapboxgl.Map({
    container: 'mapbox',
    accessToken: 'pk.eyJ1IjoiYW1uLW1raHQiLCJhIjoiY2txM2dybXdoMDU1dDJwcXppOHhhMTBxaiJ9.RbThlwliROVdToHM69cRAg',
    style: {
      version: 8,
      sources: {
        osm: {
          type: 'raster',
          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 350,
        },
      },
      layers: [
        {
          id: 'osm',
          type: 'raster',
          source: 'osm',
        },
      ],
    },
    center: props.coordinates,
    zoom: props.zoom,
  })
  const marker = new mapboxgl.Marker({
    draggable: false,
    color: 'black',
  })
  marker.setLngLat(props.coordinates).addTo(mapbox.value)
  mapbox.value.setCenter(props.coordinates)

  watch(
    () => props.coordinates,
    () => {},
  )

  useIntersectionObserver(el, () => {
    mapbox.value.resize()
  })
})
</script>
