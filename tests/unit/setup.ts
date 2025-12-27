// import { afterEach, beforeEach, vi } from 'vitest'
// import { cleanup } from '@testing-library/vue'
// import { config } from '@vue/test-utils'
// import { createPinia, setActivePinia } from 'pinia'

// /* ----------------------------------------
//  * Cleanup
//  * -------------------------------------- */
// afterEach(() => {
//   cleanup()
//   vi.clearAllMocks()
// })

// /* ----------------------------------------
//  * Pinia
//  * -------------------------------------- */
// beforeEach(() => {
//   setActivePinia(createPinia())
// })

// /* ----------------------------------------
//  * Vue Test Utils global config
//  * -------------------------------------- */
// config.global.stubs = {
//   transition: false,
//   'router-link': true,
// }

// config.global.mocks = {
//   $t: (key: string) => key, // i18n mock
// }

// /* ----------------------------------------
//  * Browser API mocks
//  * -------------------------------------- */

// // fetch
// global.fetch = vi.fn()

// // ResizeObserver
// class ResizeObserver {
//   observe() {}
//   unobserve() {}
//   disconnect() {}
// }
// global.ResizeObserver = ResizeObserver as any

// // matchMedia
// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: vi.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: vi.fn(),        // deprecated
//     removeListener: vi.fn(),     // deprecated
//     addEventListener: vi.fn(),
//     removeEventListener: vi.fn(),
//     dispatchEvent: vi.fn(),
//   })),
// })

// // scrollTo
// window.scrollTo = vi.fn()

// /* ----------------------------------------
//  * Console noise control (اختیاری)
//  * -------------------------------------- */
// // vi.spyOn(console, 'warn').mockImplementation(() => {})
// // vi.spyOn(console, 'error').mockImplementation(() => {})
