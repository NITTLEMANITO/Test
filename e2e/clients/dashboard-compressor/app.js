import Compressor from '@Test/compressor'
import Dashboard from '@Test/dashboard'
import '@Test/core/dist/style.css'
import '@Test/dashboard/dist/style.css'

const Test = new Test()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access Test in tests
window.Test = Test
