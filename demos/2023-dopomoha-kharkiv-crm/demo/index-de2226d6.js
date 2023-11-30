import { a as t } from "./leaflet-src-8e1a9985.js";
import { d as v, u as w, t as Z, a as A, r as H } from "./main-55c32297.js";
const E = "Todo", T = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", P = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', x = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", z = '<br />&copy; <a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Esri</a>; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community', y = {
  inProgress: "In Progress",
  completed: "Completed",
  noAnswer: "No Answer",
  todo: "Not Started",
  verified: "Verified",
  partial: "Partially Done",
  obsolete: "Obsolete",
  reject: "Reject",
  blacklist: "Black List"
}, B = async (e) => {
  const i = await fetch(e);
  if (!i.ok)
    throw new Error(`[fetchData] Error fetching data from url:
${e}`);
  const o = await i.json();
  if (!o)
    throw new Error(`[fetchData] No data was returned from url:
${e}`);
  return o;
}, U = (e, i = "", o = "") => {
  switch (i) {
    case y.inProgress:
      return f(e, "in-progress", o);
    case y.completed:
      return f(e, "done", o);
    case y.noAnswer:
      return f(e, "neutral", o);
    case y.obsolete:
      return f(e, "unactual", o);
    case y.partial:
      return f(e, "actual", o);
    case y.reject:
      return f(e, "reject", o);
    case y.blacklist:
      return f(e, "blacklist", o);
    case y.verified:
      return f(e, "actual", o);
    default:
      return f(e, "not-started", o);
  }
}, f = (e, i = "not-started", o = "") => t.marker(e, {
  riseOnHover: !0,
  icon: O(i, o)
}), O = (e = "neutral", i) => {
  const o = i ? `<div class="appeal-label appeal-label-${e}">${i}</div>` : "";
  switch (e) {
    case "done":
      return b(
        `
        <path class="map-pin-fill" fill-rule="evenodd" clip-rule="evenodd" d="M5.49103 27.1756C-0.497009 21.1876 -0.497009 11.4791 5.49103 5.49103C11.4791 -0.49701 21.1876 -0.49701 27.1756 5.49103C33.1637 11.4791 33.1637 21.1876 27.1756 27.1756L17.7444 36.6069C16.9633 37.388 15.7034 37.388 14.9224 36.607L5.49103 27.1756Z" />
        <path class="map-pin-ring" fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M4.78392 4.78392C11.1625 -1.59464 21.5042 -1.59464 27.8827 4.78392C34.2613 11.1625 34.2613 21.5042 27.8827 27.8827L18.4515 37.314C17.2799 38.4855 15.3869 38.4857 14.2153 37.3141L4.78392 27.8827C-1.59464 21.5042 -1.59464 11.1625 4.78392 4.78392ZM26.4685 6.19814C20.871 0.600621 11.7957 0.600621 6.19814 6.19814C0.600621 11.7957 0.600621 20.871 6.19814 26.4685L15.6295 35.8999C16.02 36.2904 16.6467 36.2904 17.0373 35.8998L26.4685 26.4685C32.066 20.871 32.066 11.7957 26.4685 6.19814Z" />
        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M24.6653 12.3515C25.1116 12.8201 25.1116 13.5799 24.6653 14.0485L15.5224 23.6485C15.0761 24.1172 14.3525 24.1172 13.9062 23.6485L9.33474 18.8485C8.88842 18.3799 8.88842 17.6201 9.33474 17.1515C9.78105 16.6828 10.5047 16.6828 10.951 17.1515L14.7143 21.1029L23.049 12.3515C23.4953 11.8828 24.219 11.8828 24.6653 12.3515Z" />
        `,
        e,
        o
      );
    case "not-started":
      return b(
        `
        <path class="map-pin-fill" fill-rule="evenodd" clip-rule="evenodd" d="M5.49102 27.1756C-0.497014 21.1876 -0.497014 11.4791 5.49102 5.49103C11.4791 -0.497009 21.1876 -0.497009 27.1756 5.49103C33.1637 11.4791 33.1637 21.1876 27.1756 27.1756L17.7444 36.6069C16.9633 37.388 15.7034 37.388 14.9224 36.607L5.49102 27.1756Z" />
        <path class="map-pin-ring" fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M4.78392 4.78392C11.1625 -1.59464 21.5042 -1.59464 27.8827 4.78392C34.2613 11.1625 34.2613 21.5042 27.8827 27.8827L18.4515 37.314C17.2799 38.4855 15.3869 38.4857 14.2153 37.3141L4.78392 27.8827C-1.59464 21.5042 -1.59464 11.1625 4.78392 4.78392ZM26.4685 6.19814C20.871 0.600621 11.7957 0.600621 6.19814 6.19814C0.600621 11.7957 0.600621 20.871 6.19814 26.4685L15.6295 35.8999C16.02 36.2904 16.6467 36.2904 17.0373 35.8998L26.4685 26.4685C32.066 20.871 32.066 11.7957 26.4685 6.19814Z"/>
        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M15.8604 13.3333C14.0532 13.3333 12.7556 14.1573 12.339 14.9973C12.0499 15.5802 11.3182 15.83 10.7047 15.5553C10.0913 15.2807 9.82836 14.5855 10.1175 14.0027C11.0493 12.1239 13.3904 11 15.8604 11C17.4567 11 18.9492 11.4596 20.0702 12.2585C21.1917 13.0576 22 14.2506 22 15.6667C22 18.0809 19.748 19.7596 17.3126 20.2035C17.2234 20.2197 17.1523 20.2617 17.1136 20.3007C17.0961 20.3183 17.0899 20.3303 17.0885 20.3335C17.0885 20.3337 17.0884 20.3338 17.0883 20.334C17.088 20.978 16.5383 21.5 15.8604 21.5C15.1822 21.5 14.6325 20.9777 14.6325 20.3333C14.6325 19.0009 15.7494 18.1125 16.8499 17.9119C18.6585 17.5823 19.5442 16.5178 19.5442 15.6667C19.5442 15.1497 19.253 14.5928 18.5967 14.1251C17.9401 13.6572 16.9767 13.3333 15.8604 13.3333ZM14.6324 23.8333C14.6324 23.189 15.1822 22.6667 15.8603 22.6667H15.8726C16.5508 22.6667 17.1005 23.189 17.1005 23.8333C17.1005 24.4777 16.5508 25 15.8726 25H15.8603C15.1822 25 14.6324 24.4777 14.6324 23.8333Z" />
        `,
        e,
        o
      );
    case "actual":
      return b(
        `
        <path class="map-pin-fill" fill-rule="evenodd" clip-rule="evenodd" d="M5.49102 27.1756C-0.497014 21.1876 -0.497014 11.4791 5.49102 5.49103C11.4791 -0.497009 21.1876 -0.497009 27.1756 5.49103C33.1637 11.4791 33.1637 21.1876 27.1756 27.1756L17.7444 36.6069C16.9633 37.388 15.7034 37.388 14.9224 36.607L5.49102 27.1756Z" />
        <path class="map-pin-ring" fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M4.78392 4.78392C11.1625 -1.59464 21.5042 -1.59464 27.8827 4.78392C34.2613 11.1625 34.2613 21.5042 27.8827 27.8827L18.4515 37.314C17.2799 38.4855 15.3869 38.4857 14.2153 37.3141L4.78392 27.8827C-1.59464 21.5042 -1.59464 11.1625 4.78392 4.78392ZM26.4685 6.19814C20.871 0.600621 11.7957 0.600621 6.19814 6.19814C0.600621 11.7957 0.600621 20.871 6.19814 26.4685L15.6295 35.8999C16.02 36.2904 16.6467 36.2904 17.0373 35.8998L26.4685 26.4685C32.066 20.871 32.066 11.7957 26.4685 6.19814Z"/>
        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M16 11C16.6627 11 17.2 11.5373 17.2 12.2V15.8L20.8 15.8C21.4627 15.8 22 16.3373 22 17C22 17.6627 21.4627 18.2 20.8 18.2H17.2V21.8C17.2 22.4627 16.6627 23 16 23C15.3373 23 14.8 22.4627 14.8 21.8V18.2H11.2C10.5373 18.2 10 17.6627 10 17C10 16.3373 10.5373 15.8 11.2 15.8L14.8 15.8V12.2C14.8 11.5373 15.3373 11 16 11Z"/>
        `,
        e,
        o
      );
    case "in-progress":
      return b(
        `
        <path class="map-pin-fill" fill-rule="evenodd" clip-rule="evenodd" d="M5.49102 27.1756C-0.497014 21.1876 -0.497014 11.4791 5.49102 5.49103C11.4791 -0.497009 21.1876 -0.497009 27.1756 5.49103C33.1637 11.4791 33.1637 21.1876 27.1756 27.1756L17.7444 36.6069C16.9633 37.388 15.7034 37.388 14.9224 36.607L5.49102 27.1756Z"/>
        <path class="map-pin-ring" fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M4.78392 4.78392C11.1625 -1.59464 21.5042 -1.59464 27.8827 4.78392C34.2613 11.1625 34.2613 21.5042 27.8827 27.8827L18.4515 37.314C17.2799 38.4855 15.3869 38.4857 14.2153 37.3141L4.78392 27.8827C-1.59464 21.5042 -1.59464 11.1625 4.78392 4.78392ZM26.4685 6.19814C20.871 0.600621 11.7957 0.600621 6.19814 6.19814C0.600621 11.7957 0.600621 20.871 6.19814 26.4685L15.6295 35.8999C16.02 36.2904 16.6467 36.2904 17.0373 35.8998L26.4685 26.4685C32.066 20.871 32.066 11.7957 26.4685 6.19814Z"/>
        <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M24.9514 17.941L21.9675 17.631C21.9889 17.4245 22 17.2141 22 17C22 16.7859 21.9889 16.5755 21.9675 16.369L24.9514 16.059C24.9835 16.3683 25 16.6822 25 17C25 17.3178 24.9835 17.6317 24.9514 17.941ZM24.2239 13.3384L21.484 14.5601C21.3128 14.1762 21.1019 13.8127 20.8561 13.475L23.2817 11.7096C23.6497 12.2153 23.9664 12.7608 24.2239 13.3384ZM21.2904 9.71828L19.5251 12.1439C19.1874 11.8981 18.8238 11.6872 18.4399 11.516L19.6616 8.77608C20.2392 9.03364 20.7847 9.35027 21.2904 9.71828ZM16.941 8.04861L16.631 11.0325C16.4245 11.0111 16.2141 11 16 11C15.7859 11 15.5755 11.0111 15.369 11.0325L15.059 8.04861C15.3683 8.01647 15.6822 8 16 8C16.3178 8 16.6318 8.01647 16.941 8.04861ZM7.77609 20.6616L10.516 19.4399C10.6873 19.8238 10.8981 20.1873 11.1439 20.525L8.71829 22.2904C8.35028 21.7847 8.03365 21.2392 7.77609 20.6616ZM10.7096 24.2817L12.475 21.8561C12.8127 22.1019 13.1762 22.3128 13.5602 22.484L12.3384 25.2239C11.7608 24.9664 11.2153 24.6497 10.7096 24.2817ZM15.059 25.9514L15.369 22.9675C15.5755 22.9889 15.7859 23 16 23C16.2141 23 16.4245 22.9889 16.631 22.9675L16.941 25.9514C16.6318 25.9835 16.3178 26 16 26C15.6822 26 15.3683 25.9835 15.059 25.9514ZM19.6616 25.2239L18.4399 22.484C18.8238 22.3128 19.1874 22.1019 19.5251 21.8561L21.2904 24.2817C20.7847 24.6497 20.2392 24.9664 19.6616 25.2239ZM23.2817 22.2904L20.8561 20.525C21.1019 20.1873 21.3128 19.8238 21.484 19.4399L24.2239 20.6616C23.9664 21.2392 23.6497 21.7847 23.2817 22.2904Z" />
        <path fill="white" fill-opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M7.04861 16.059C7.01647 16.3683 7 16.6822 7 17C7 17.3178 7.01647 17.6317 7.04861 17.941L10.0325 17.631C10.0111 17.4245 10 17.2141 10 17C10 16.7859 10.0111 16.5755 10.0325 16.369L7.04861 16.059Z" />
        <path fill="white" fill-opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.71829 11.7096L11.1439 13.475C10.8981 13.8127 10.6873 14.1762 10.516 14.5601L7.77609 13.3384C8.03365 12.7608 8.35028 12.2153 8.71829 11.7096Z" />
        <path fill="white" fill-opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M12.3384 8.77608L13.5601 11.516C13.1762 11.6872 12.8127 11.8981 12.4749 12.1439L10.7096 9.71828C11.2153 9.35027 11.7608 9.03364 12.3384 8.77608Z" fill="white" />
        <path class="map-pin-fill" fill="white" fill-opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L12.2929 17.7071C11.9024 17.3166 11.9024 16.6834 12.2929 16.2929C12.6834 15.9024 13.3166 15.9024 13.7071 16.2929L15 17.5858L18.2929 14.2929C18.6834 13.9024 19.3166 13.9024 19.7071 14.2929Z"/>
        `,
        e,
        o
      );
    case "reject":
      return b(
        `
        <path class="map-pin-fill" fill-rule="evenodd" clip-rule="evenodd" d="M5.49102 27.1756C-0.497014 21.1876 -0.497014 11.4791 5.49102 5.49103C11.4791 -0.497009 21.1876 -0.497009 27.1756 5.49103C33.1637 11.4791 33.1637 21.1876 27.1756 27.1756L17.7444 36.6069C16.9633 37.388 15.7034 37.388 14.9224 36.607L5.49102 27.1756Z"/>
        <path class="map-pin-ring" fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M4.78392 4.78392C11.1625 -1.59464 21.5042 -1.59464 27.8827 4.78392C34.2613 11.1625 34.2613 21.5042 27.8827 27.8827L18.4515 37.314C17.2799 38.4855 15.3869 38.4857 14.2153 37.3141L4.78392 27.8827C-1.59464 21.5042 -1.59464 11.1625 4.78392 4.78392ZM26.4685 6.19814C20.871 0.600621 11.7957 0.600621 6.19814 6.19814C0.600621 11.7957 0.600621 20.871 6.19814 26.4685L15.6295 35.8999C16.02 36.2904 16.6467 36.2904 17.0373 35.8998L26.4685 26.4685C32.066 20.871 32.066 11.7957 26.4685 6.19814Z"/>
        <path d="M10 23L22 11M10 11L22 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        e,
        o
      );
    case "blacklist":
      return b(
        `
        <path fill="#111826" fill-rule="evenodd" clip-rule="evenodd" d="M16 17.237C16 15.4493 17.4391 14 19.2143 14H29.9286C30.3344 14 30.7054 14.2309 30.8869 14.5965C31.0684 14.962 31.0292 15.3995 30.7857 15.7264L28.0536 19.3951L30.7857 23.0637C31.0292 23.3907 31.0684 23.8281 30.8869 24.1937C30.7054 24.5592 30.3344 24.7901 29.9286 24.7901H19.2143C18.6226 24.7901 18.1429 25.2732 18.1429 25.8691V34.921C18.1429 35.5169 17.6632 36 17.0714 36C16.4797 36 16 35.5169 16 34.921V17.237Z"/>
        <path class="map-pin-ring" fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M14 17.237C14 14.358 16.3212 12 19.2143 12H29.9286C31.0995 12 32.1614 12.6661 32.6782 13.7071C33.1941 14.7462 33.0837 15.9892 32.3898 16.921L30.5473 19.3951L32.3898 21.8691C33.0837 22.8009 33.1941 24.0439 32.6782 25.083C32.1614 26.124 31.0995 26.7901 29.9286 26.7901H20.1429V34.921C20.1429 36.6082 18.781 38 17.0714 38C15.3619 38 14 36.6082 14 34.921V17.237ZM28.0536 19.3951L30.7857 15.7264C31.0292 15.3995 31.0684 14.962 30.8869 14.5965C30.7054 14.2309 30.3344 14 29.9286 14H19.2143C17.4391 14 16 15.4493 16 17.237V34.921C16 35.5169 16.4797 36 17.0714 36C17.6632 36 18.1429 35.5169 18.1429 34.921V25.8691C18.1429 25.2732 18.6226 24.7901 19.2143 24.7901H29.9286C30.3344 24.7901 30.7054 24.5592 30.8869 24.1937C31.0684 23.8281 31.0292 23.3907 30.7857 23.0637L28.0536 19.3951Z"/>
        `,
        e,
        o
      );
    default:
      return b(
        `
        <path class="map-pin-${e} map-pin-fill" fill-rule="evenodd" clip-rule="evenodd" d="M5.49103 27.1756C-0.497009 21.1876 -0.497009 11.4791 5.49103 5.49103C11.4791 -0.49701 21.1876 -0.49701 27.1756 5.49103C33.1637 11.4791 33.1637 21.1876 27.1756 27.1756L17.7444 36.6069C16.9633 37.388 15.7034 37.388 14.9224 36.607L5.49103 27.1756ZM16.3333 22.0833C19.509 22.0833 22.0833 19.509 22.0833 16.3333C22.0833 13.1577 19.509 10.5833 16.3333 10.5833C13.1577 10.5833 10.5833 13.1577 10.5833 16.3333C10.5833 19.509 13.1577 22.0833 16.3333 22.0833Z"/>
        <path class="map-pin-ring" fill-rule="evenodd" clip-rule="evenodd" d="M4.78392 4.78392C11.1625 -1.59464 21.5042 -1.59464 27.8827 4.78392C34.2613 11.1625 34.2613 21.5042 27.8827 27.8827L18.4515 37.314C17.2799 38.4855 15.3869 38.4857 14.2153 37.3141L4.78392 27.8827C-1.59464 21.5042 -1.59464 11.1625 4.78392 4.78392ZM26.4685 6.19814C20.871 0.600621 11.7957 0.600621 6.19814 6.19814C0.600621 11.7957 0.600621 20.871 6.19814 26.4685L15.6295 35.8999C16.02 36.2904 16.6467 36.2904 17.0373 35.8998L26.4685 26.4685C32.066 20.871 32.066 11.7957 26.4685 6.19814ZM16.3333 11.5833C13.71 11.5833 11.5833 13.71 11.5833 16.3333C11.5833 18.9567 13.71 21.0833 16.3333 21.0833C18.9567 21.0833 21.0833 18.9567 21.0833 16.3333C21.0833 13.71 18.9567 11.5833 16.3333 11.5833ZM9.58334 16.3333C9.58334 12.6054 12.6054 9.58333 16.3333 9.58333C20.0613 9.58333 23.0833 12.6054 23.0833 16.3333C23.0833 20.0613 20.0613 23.0833 16.3333 23.0833C12.6054 23.0833 9.58334 20.0613 9.58334 16.3333Z" fill="white"/>
        `,
        e,
        o
      );
  }
}, b = (e, i = "default", o = "") => t.divIcon({
  className: `map-pin-container map-pin-${i}`,
  iconSize: [30, 35],
  iconAnchor: [15, 35],
  popupAnchor: [0, -25],
  tooltipAnchor: [0, -22],
  html: `
    <svg width="33" height="39" viewBox="0 0 33 39" class="map-pin" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${e}
    </svg>
    ${o}
  `
}), _ = (e, i, o, d) => {
  const c = t.DomUtil.create(
    "div",
    "flex flex-col gap-1 items-stretch p-0 m-0"
  ), s = t.DomUtil.create("div", "pb-1", c), u = t.DomUtil.create("h4", "font-base mb-1", s), a = t.DomUtil.create("div", "m-0", s);
  if (e.tag) {
    const l = t.DomUtil.create("div", "m-0", s);
    l.innerHTML = e.tag;
  }
  const n = t.DomUtil.create(
    "button",
    "btn-primary grid place-items-center w-auto text-xs px-2 py-1",
    c
  ), L = t.DomUtil.create(
    "button",
    "btn-primary w-auto grid place-items-center bg-slate-600 text-xs px-2 py-1",
    c
  );
  u.innerHTML = e.appealId, a.innerHTML = e.status || E, L.innerHTML = "Details", n.setAttribute("style", "min-width: 90px"), L.addEventListener("click", d);
  const p = () => {
    n.innerHTML = "Add to route", n.classList.add("btn-primary"), n.classList.remove("btn-danger"), n.removeEventListener("click", m), n.addEventListener("click", g);
  }, m = () => {
    o(e), p();
  }, k = () => {
    n.innerHTML = "Remove", n.classList.remove("btn-primary"), n.classList.add("btn-danger"), n.removeEventListener("click", g), n.addEventListener("click", m);
  }, g = () => {
    i(), k();
  };
  return e.onDeleteFromDelivery = p, e.onAddToDelivery = k, e.isAppealInDeliveryRoute ? (k(), c) : (p(), c);
}, R = ({ appealId: e, status: i }) => `
    <h4 style="font-family:'Remissis',sans-serif; font-size:0.875rem;">
      ${e}
    </h4>
    <div>${i || E}</div>
  `, G = {
  kharkiv: {
    coordinates: [50, 36.3],
    zoomLevel: 10,
    label: v.kharkiv
  },
  industrialnyi: {
    coordinates: [49.93, 36.38],
    zoomLevel: 11,
    label: v.industrialnyi,
    id: "r7340969",
    bounds: t.latLngBounds(t.latLng(49.862, 36.1), t.latLng(50.1, 36.46))
  },
  niemyshlia: {
    coordinates: [49.96, 36.35],
    zoomLevel: 11,
    label: v.niemyshlia,
    id: "r7340972",
    bounds: t.latLngBounds(t.latLng(49.862, 36.1), t.latLng(50.1, 36.46))
  },
  saltivskiy: {
    coordinates: [49.99, 36.32],
    zoomLevel: 11,
    label: v.saltivskiy,
    id: "r7340971",
    bounds: t.latLngBounds(t.latLng(49.862, 36.1), t.latLng(50.1, 36.46))
  },
  kyivskyi: {
    coordinates: [50.03, 36.3],
    zoomLevel: 11,
    label: v.kyivskyi,
    id: "r7340973",
    bounds: t.latLngBounds(t.latLng(49.862, 36.1), t.latLng(50.1, 36.46))
  },
  shevchenkivskyi: {
    coordinates: [50.035, 36.225],
    zoomLevel: 11,
    label: v.shevchenkivskyi,
    id: "r3796255",
    bounds: t.latLngBounds(t.latLng(49.862, 36.1), t.latLng(50.1, 36.46))
  },
  holodnohirskyi: {
    coordinates: [50.005, 36.17],
    zoomLevel: 11,
    label: v.holodnohirskyi,
    id: "r3801249",
    bounds: t.latLngBounds(t.latLng(49.862, 36.1), t.latLng(50.1, 36.46))
  },
  novobavarskyi: {
    coordinates: [49.96, 36.18],
    zoomLevel: 12,
    label: v.novobavarskyi,
    id: "r3801278",
    bounds: t.latLngBounds(t.latLng(49.862, 36.1), t.latLng(50.1, 36.46))
  },
  osnovianskyi: {
    coordinates: [49.945, 36.23],
    zoomLevel: 11,
    label: v.osnovianskyi,
    id: "r3801315",
    bounds: t.latLngBounds(t.latLng(49.89, 36.2), t.latLng(49.98, 36.3))
  },
  slobidskyi: {
    coordinates: [49.95, 36.28],
    zoomLevel: 12,
    label: v.slobidskyi,
    id: "r7340970",
    bounds: t.latLngBounds(t.latLng(49.898, 36.24), t.latLng(49.97, 36.36))
  }
}, V = t.latLng(49.862, 36.1), $ = t.latLng(50.1, 36.46), K = t.latLngBounds(V, $), W = t.latLng(48.5, 34.8), j = t.latLng(50.5, 38.3), q = t.latLngBounds(
  W,
  j
), D = A.kharkivAppealsGeodataURL, Q = () => {
  const e = w(), {
    appealsGeoData: i,
    isSidebarOpen: o,
    isMapPopupDisplayed: d,
    isMapTooltipDisplayed: c,
    selectedAppeal: s
  } = Z(e), {
    onOpenDetailsTab: u,
    onOpenSidebar: a,
    onCloseSidebar: n,
    onDeleteFromDelivery: L,
    onAddToDelivery: p
  } = e, m = t.layerGroup(), k = {
    onEachFeature: (r, C) => {
      c.value && C.bindTooltip(R(r.properties)), d.value && C.bindPopup(
        _(
          r.properties,
          p,
          L,
          () => {
            a(), u();
          }
        )
      ), C.on({
        add: (h) => {
          r.properties.mapPinElement || (r.properties.mapPinElement = h.target._icon);
        },
        click: (h) => {
          s.value && s.value.mapPinElement && s.value.mapPinElement.classList.remove("selected"), s.value = r.properties;
          const M = h.target._icon;
          M.classList.add("selected"), s.value.mapPinElement = M;
        },
        dblclick: () => {
          if (o.value) {
            n();
            return;
          }
          a(), u();
        }
      }), m.addLayer(C);
    },
    pointToLayer: (r, C) => {
      const { appealId: h, status: M } = r.properties || {};
      return h ? U(C, M || "", h) : t.marker(C, { opacity: 0 });
    }
  }, g = async (r = D) => {
    const C = await B(r);
    i.value = t.geoJson(C, k).addTo(
      m
    );
  };
  return {
    appealGroupLayer: m,
    onAddAppealsToMap: g,
    onUpdateAppealOnMap: (r = D) => {
      if (i.value)
        return m.removeLayer(i.value), g(r);
    }
  };
}, X = ({
  appealGroupLayer: e,
  districtsGroupLayer: i,
  esriWorldImageryLayer: o,
  openStreetMapLayer: d
}) => {
  const { controlPanelRef: c, isSatelliteEnabled: s } = Z(w()), u = s.value ? {
    "Sattelite image": o,
    "Basic map": d
  } : {
    "Basic map": d
  }, a = {
    Districts: i,
    Appeals: e
  }, n = t.control.layers(u, a, {
    hideSingleBase: !0,
    collapsed: !1
  });
  return c.value = n, { controlPanel: n };
}, I = A.kharkivDistrictsGeodataURL, S = (e, i) => {
  const o = Object.values(G).filter(
    ({ id: p }) => p === e.full_id
  )[0];
  if (!o || !o.bounds)
    return;
  const d = i.coordinates, [c] = d, s = t.polygon(c).getBounds(), u = s.getNorthEast(), a = s.getSouthWest(), n = t.latLng(a.lng, a.lat), L = t.latLng(u.lng, u.lat);
  return t.latLngBounds(n, L);
}, Y = async ({ map: e }) => {
  const i = t.layerGroup(), { selectedDistrict: o, zoomThresholds: d } = Z(w()), c = {
    // Style options
    style: () => ({
      className: "district-overlay",
      weight: 1,
      fillOpacity: 0,
      stroke: !0
    }),
    // Setup districts layer interactions
    onEachFeature: (a, n) => {
      var g;
      const L = (g = a.properties) == null ? void 0 : g.name;
      n.bindPopup(L, {
        content: L,
        className: "district-popup cursor-pointer"
      });
      const p = n.getPopup(), m = () => void (o.value = void 0), k = () => {
        const l = S(a.properties, a.geometry);
        l && (o.value = void 0, e.flyToBounds(l, { animate: !0 }));
      };
      n.on({
        popupopen: () => {
          var l, r;
          (l = p == null ? void 0 : p._closeButton) == null || l.addEventListener("click", m), (r = p == null ? void 0 : p._contentNode) == null || r.addEventListener("click", k);
        },
        click: (l) => {
          var h;
          const r = l.target.feature, C = S(a.properties, a.geometry);
          if (C && ((h = o.value) == null ? void 0 : h.id) === r.properties.full_id && l.target._map._zoom <= d.value.districtsHover) {
            o.value = void 0, e.flyToBounds(C, { animate: !0 }), l.target.closePopup();
            return;
          }
          o.value = {
            name: r.properties.name,
            id: r.properties.full_id,
            region: r.properties.region
          };
        },
        mouseover: (l) => {
          const r = l.target;
          r._map._zoom <= d.value.districtsHover && r.setStyle({
            weight: 2,
            fillOpacity: 0.2
          });
        },
        mousemove: (l) => {
          l.target._map._zoom > d.value.districtsHover && u.resetStyle(l.target);
        },
        mouseout: (l) => {
          u.resetStyle(l.target);
        }
      });
    }
  }, s = await B(I), u = t.geoJSON(s, c).addTo(
    i
  );
  return {
    districtsData: s,
    districtsGroupLayer: i,
    districtNamesLayer: u,
    districtsOptions: c,
    selectedDistrict: o
  };
}, e1 = () => {
  const e = H(), i = new t.Control({ position: "topright" }), o = ({ name: d } = { name: "Kharkiv" }) => {
    e.value && (e.value.innerHTML = "<h4>District</h4>" + d);
  };
  return i.onAdd = () => (e.value = t.DomUtil.create(
    "div",
    "bg-white py-1 px-2 rounded-md shadow-md"
  ), o(), e.value), { infoPanel: i, update: o };
}, t1 = () => {
  const e = t.tileLayer(x, {
    minZoom: 3,
    maxZoom: 19,
    attribution: z
  }), i = t.tileLayer(T, {
    minZoom: 3,
    maxZoom: 19,
    attribution: P
  });
  return { esriWorldImageryLayer: e, openStreetMapLayer: i };
};
export {
  G as districtParams,
  U as getAppealsMarker,
  _ as getAppealsPopover,
  R as getAppealsTooltip,
  S as getDistrictBounds,
  K as kharkivCityBounds,
  $ as kharkivNorthEast,
  q as kharkivRegionBounds,
  j as kharkivRegionNorthEast,
  W as kharkivRegionSouthWest,
  V as kharkivSouthWest,
  Q as useAppealsLayer,
  X as useControlPanel,
  Y as useDistrictsLayer,
  e1 as useInfoPanel,
  t1 as useTileLayers
};
