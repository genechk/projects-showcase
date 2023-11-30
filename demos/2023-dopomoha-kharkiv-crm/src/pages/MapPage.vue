<script setup lang="ts">
import { useMap } from '@dkc:composables'
import { MapSidebar } from '@dkc:components/map'

const {
  delivery,
  isControlPanelEnabled,
  isSatelliteEnabled,
  isSidebarOpen,
  isZoomedOut,
  mapElementRef,
  onAddToDelivery,
  onChangeTab,
  onClearDeliveryRoute,
  onCloseSidebar,
  onDeleteFromDelivery,
  onToggleControlPanel,
  onToggleSatelliteLayer,
  selectedAppeal,
  selectedSidebarTab,
} = useMap()
</script>

<template>
  <div class="container flex flex-1 overflow-y-auto p-0">
    <div
      :class="[
        'z-0 m-0 flex w-full flex-1 flex-col overflow-hidden p-0 sm:flex-row sm:overflow-y-auto',
        isZoomedOut && 'zoomed-in',
      ]"
      @keydown.esc="onCloseSidebar"
    >
      <main
        id="map"
        ref="mapElementRef"
        class="z-0 min-h-[10rem] w-full flex-grow transition-all micro:min-h-[15rem] sm:flex-grow-0"
      ></main>
      <MapSidebar
        v-model:delivery-route="delivery.route"
        :is-control-panel-enabled="isControlPanelEnabled"
        :is-satellite-enabled="isSatelliteEnabled"
        :is-sidebar-open="isSidebarOpen"
        :on-add-to-delivery="onAddToDelivery"
        :on-change-tab="onChangeTab"
        :on-clear-delivery-route="onClearDeliveryRoute"
        :on-close-sidebar="onCloseSidebar"
        :on-delete-from-delivery="onDeleteFromDelivery"
        :on-toggle-control-panel="onToggleControlPanel"
        :on-toggle-satellite-layer="onToggleSatelliteLayer"
        :selected-appeal="selectedAppeal"
        :selected-sidebar-tab="selectedSidebarTab"
      />
    </div>
  </div>
</template>

<style lang="postcss">
@import 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';

#map {
  @apply font-sans;

  .district-overlay {
    transition-property: opacity, fill-opacity, color, background-color,
      border-color, text-decoration-color, fill, stroke, stroke-opacity,
      stroke-width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    @apply fill-cyan-500 stroke-cyan-500;
    @apply opacity-60 hover:opacity-100;
  }

  .district-popup {
    .leaflet-popup-content,
    .leaflet-popup-close-button {
      @apply font-bold tracking-wide text-white;
    }

    .leaflet-popup-close-button {
      @apply opacity-75 hover:opacity-100;
    }

    .leaflet-popup-content-wrapper {
      @apply rounded-md;
    }

    .leaflet-popup-content-wrapper,
    .leaflet-popup-tip {
      background-color: #06b6d4;
      opacity: 0.7;
    }
  }

  .zoomed-in & {
    .map-pin-container {
      &:after {
        @apply scale-100;
      }

      &:hover {
        &:after {
          @apply scale-125;
        }

        .map-pin {
          @apply scale-0;
        }

        .appeal-label {
          @apply top-1/4 scale-150 opacity-100;
        }
      }
    }

    .map-pin {
      @apply scale-0;
    }

    .appeal-label {
      @apply scale-0;
    }
  }

  .map-pin-container {
    @apply m-0 flex items-center justify-center p-0;

    &:after {
      @apply -z-10 scale-0 transition-all;
      @apply absolute bottom-0 h-3 w-3;
      @apply rounded-full border-2 border-white bg-slate-400;
      content: '';
    }

    &.delivery-route {
      .map-pin {
        @apply scale-125 opacity-100;
      }

      .map-pin-fill {
        @apply fill-primary;
      }

      .map-pin-ring {
        @apply opacity-100;
      }

      .appeal-label {
        @apply bg-primary-800 text-white;
      }

      &:hover {
        .map-pin {
          @apply -translate-y-2 scale-150;
        }

        .appeal-label {
          @apply -top-1/2 scale-150;
        }
      }
    }

    .map-pin-ring {
      @apply opacity-80;
    }

    &:focus,
    &.selected {
      @apply outline-none;
      z-index: 1000;

      .map-pin {
        @apply -translate-y-2 scale-150 opacity-100;
      }

      .appeal-label {
        @apply -top-1/2 scale-150 opacity-100;
      }

      .map-pin-ring {
        @apply opacity-100;
      }

      &:hover {
        .map-pin {
          @apply -translate-y-2 scale-150;
        }

        .appeal-label {
          @apply -top-1/2 scale-150;
        }
      }
    }

    &:hover {
      .map-pin {
        @apply -translate-y-1 scale-125 opacity-100;
      }

      .appeal-label {
        @apply -top-1/2 scale-150 opacity-100;
      }

      .map-pin-ring {
        @apply opacity-100;
      }
    }
  }

  .appeal-label {
    @apply absolute -top-1/4 z-50 px-0.5 transition-all;
    @apply rounded-sm opacity-90;
    @apply bg-white shadow;

    font-size: 0.625rem;
    font-family: 'Remissis', sans-serif;
  }

  .map-pin {
    @apply transition-all;
    @apply shadow-slate-400 drop-shadow-md;
    @apply z-0 opacity-80;
  }

  .map-pin-fill {
    @apply transition-colors;
  }

  .map-pin-not-started {
    .map-pin-fill {
      @apply fill-slate-400;
    }
  }

  .map-pin-neutral {
    .map-pin-fill {
      fill: #3ba2b8;
    }

    &:after {
      background-color: #3ba2b8;
    }

    .appeal-label {
      @apply bg-cyan-800 text-white;
    }
  }

  .map-pin-actual {
    .map-pin-fill {
      @apply fill-teal-400;
    }

    &:after {
      @apply bg-teal-400;
    }

    .appeal-label {
      @apply bg-teal-700 text-white;
    }
  }

  .map-pin-unactual {
    .map-pin-fill {
      @apply fill-slate-400;
    }

    &:after {
      @apply bg-slate-400;
    }

    .appeal-label {
      @apply bg-slate-600 text-white;
    }
  }

  .map-pin-in-progress {
    .map-pin-fill {
      @apply fill-amber-500;
    }

    &:after {
      @apply bg-amber-500;
    }

    .appeal-label {
      @apply bg-amber-600 text-white;
    }
  }

  .map-pin-done {
    .map-pin-fill {
      @apply fill-green-500;
    }

    &:after {
      @apply bg-green-500;
    }

    .appeal-label {
      @apply bg-green-600 text-white;
    }
  }

  .map-pin-blacklist {
    .map-pin-fill {
      @apply fill-slate-900;
    }

    &:after {
      @apply bg-slate-900;
    }

    .appeal-label {
      @apply -top-1 bg-black text-white;
    }
  }

  .map-pin-reject {
    .map-pin-fill {
      @apply fill-red-600;
    }

    &:after {
      @apply bg-red-600;
    }

    .appeal-label {
      @apply bg-red-700 text-white;
    }
  }

  .leaflet-control-layers.leaflet-control-layers-expanded.leaflet-control {
    @apply border-none p-2.5 pb-2 shadow-md;

    input[type='checkbox'],
    input[type='radio'] {
      @apply m-0 mb-0.5 bg-slate-500;
      @apply focus:border-none focus:bg-cyan-600 focus:outline-none focus:ring-0;
      @apply hover:border-none hover:bg-cyan-600;
    }

    input[type='checkbox'] {
      @apply rounded-sm;
    }

    label span {
      @apply flex items-center gap-1.5;
    }
  }
}
</style>
