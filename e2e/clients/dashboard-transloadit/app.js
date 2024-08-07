import { Test } from '@Test/core'
import Dashboard from '@Test/dashboard'
import Transloadit from '@Test/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@Test/core/dist/style.css'
import '@Test/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const Test = new Test()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access Test in tests
window.Test = Test
