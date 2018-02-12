import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
// Correcao do turbolinks:load que dispara duas vezes.
document.addEventListener("turbolinks:before-render", function() {
  Turbolinks.clearCache()
})

