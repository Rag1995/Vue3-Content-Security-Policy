<template>
  <div ref="refMap" style="width: 400px; height: 300px"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { loadSDK } from "../mixin/loadSDK";

const refMap = ref(null);
const map = ref(null);
const marker = ref(null);
const lat = ref(25.0325917);
const lng = ref(121.5624999);

const initMap = () => {
  // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
  // eslint-disable-next-line no-undef
  map.value = new google.maps.Map(refMap.value, {
    // 設定地圖的中心點經緯度位置
    center: { lat: lat.value, lng: lng.value },
    // 設定地圖縮放比例 0-20
    zoom: 15,
    // 限制使用者能縮放地圖的最大比例
    maxZoom: 20,
    // 限制使用者能縮放地圖的最小比例
    minZoom: 3,
    // 設定是否呈現右下角街景小人
    streetViewControl: false,
    // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
    mapTypeControl: false,
  });
};
// 建立地標
const setMarker = () => {
  // 建立一個新地標
  // eslint-disable-next-line no-undef
  marker.value = new google.maps.Marker({
    // 設定地標的座標
    position: { lat: lat.value, lng: lng.value },
    // 設定地標要放在哪一個地圖
    map: map.value,
  });
};
onMounted(() => {
  loadSDK("g-map", "https://maps.googleapis.com/maps/api/js").then(() => {
    initMap();
    setMarker();
  });
});
</script>
