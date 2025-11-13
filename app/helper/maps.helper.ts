export function createGoogleMapsUrlWithMarker({
  lat,
  lng,
  zoom = 18,
}: {
  lat: string | number;
  lng: string | number;
  zoom?: number;
}) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&zoom=${zoom}`;
}
