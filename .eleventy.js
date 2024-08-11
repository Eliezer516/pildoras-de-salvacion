const PrettyError = require("pretty-error").start()
const format = require("date-fns/format")
const esLocale = require("date-fns/locale/es")
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", dateObj => {
    if (dateObj) {
      const fecha = new Date(dateObj)
      const fechaFormateada = format(fecha, 'MMMM dd, yyyy', { locale: esLocale })
      const fechaLegible = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.substring(1)
      return fechaLegible
    }
    return
  });

  eleventyConfig.addPlugin(emojiReadTime, {
    label: "minutos.",
    showEmoji: false
  });

  eleventyConfig.addPassthroughCopy('src/assets')
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
