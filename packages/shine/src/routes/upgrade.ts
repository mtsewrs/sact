export function upgrade(res, req, context) {
  res.upgrade(
    {
      url: req.getUrl()
    },
    /* Spell these correctly */
    req.getHeader('sec-websocket-key'),
    req.getHeader('sec-websocket-protocol'),
    req.getHeader('sec-websocket-extensions'),
    context
  )
}
