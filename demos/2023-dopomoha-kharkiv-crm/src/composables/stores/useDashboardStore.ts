import { useMediaQuery } from '@vueuse/core'
import { defineStore } from 'pinia'
import { screens } from 'tailwindcss/defaultTheme'
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useDashboardStore = defineStore('dashboard', () => {
  const createScrollRef = ref<HTMLHeadingElement>()
  const editScrollRef = ref<HTMLHeadingElement>()
  const mapScrollRef = ref<HTMLHeadingElement>()
  const deliveryScrollRef = ref<HTMLHeadingElement>()
  const planScrollRef = ref<HTMLHeadingElement>()
  const topScrollRef = ref<HTMLHeadingElement>()

  const scrollRefs = {
    create: createScrollRef,
    edit: editScrollRef,
    map: mapScrollRef,
    delivery: deliveryScrollRef,
    plan: planScrollRef,
    top: topScrollRef,
  }

  const selectedTab = ref(0)

  const router = useRouter()
  const isScreenSmallOrWider = useMediaQuery(`(min-width: ${screens.sm})`)
  const isScreen = ref(false)

  const tabsToRoutes = [
    { name: 'dashboard' },
    { name: 'stats' },
    { name: 'guide' },
  ]
  const onChangeTab = async (tab: number) => {
    selectedTab.value = tab
    await nextTick()

    tabsToRoutes[tab] != null && router.push(tabsToRoutes[tab])
  }
  const onScrollToTop = () => {
    if (isScreenSmallOrWider.value && topScrollRef.value) {
      return topScrollRef.value.scrollIntoView({
        behavior: 'smooth',
      })
    }

    if (window && typeof window.scroll === 'function') {
      window.scroll({
        top: 0,
        left: 0,
      })
    }
  }
  const onSelectMainTab = () => {
    onChangeTab(0)
    onScrollToTop()
  }
  const onSelectStatsTab = () => {
    onChangeTab(1)
    onScrollToTop()
  }
  const onSelectGuideTab = async (header: keyof typeof scrollRefs) => {
    onChangeTab(2)
    await nextTick()

    if (header) {
      if (window && typeof window.scroll === 'function') {
        window.scroll({
          top: 0,
          behavior: 'instant',
        })
      }

      scrollRefs[header].value?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return {
    createScrollRef,
    editScrollRef,
    deliveryScrollRef,
    isScreenSmallOrWider,
    isScreen,
    mapScrollRef,
    onChangeTab,
    onScrollToTop,
    onSelectGuideTab,
    onSelectMainTab,
    onSelectStatsTab,
    planScrollRef,
    selectedTab,
    scrollRefs,
    topScrollRef,
  }
})
