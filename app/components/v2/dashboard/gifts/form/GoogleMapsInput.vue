<template>
    <ClientOnly>
        <div id="map" class="size-[600px] shadow-2xl rounded-2xl" />
    </ClientOnly>
</template>

<script setup>
const emit = defineEmits(["update:location"])

const wishStore = useWishesStore()

const loc = ref({
    lat: "",
    lng: ""
})

onMounted(() => {
    const check = setInterval(() => {
        if (window.google && window.google.maps) {
            clearInterval(check)

            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: 45.4642, lng: 9.19 },
                zoom: 14
            })

            const marker = new google.maps.Marker({
                position: { lat: 45.4642, lng: 9.19 },
                map,
                draggable: true,
                icon: {
                    url: "/icons/pin-circle.svg",
                    scaledSize: new google.maps.Size(80, 80),
                    anchor: new google.maps.Point(40, 80)
                }
            })

            marker.addListener("dragend", () => {
                const pos = marker.getPosition()

                loc.value = {
                    lat: pos.lat().toString(),
                    lng: pos.lng().toString()
                }

                emit("update:location", loc.value)


                const geocoder = new google.maps.Geocoder()
                geocoder.geocode(
                    { location: pos },
                    (results, status) => {
                        if (status === "OK" && results[0]) {
                            console.log("Indirizzo:", results[0].formatted_address)
                            wishStore.setSelectedAddessLocation(results[0].formatted_address)
                        } else {
                            console.warn("error:", status)
                        }
                    }
                )
            })
        }
    }, 100)
})
</script>
