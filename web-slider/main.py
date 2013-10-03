from quick2web import WebServer, SharedValue

def main():
  webserver = WebServer(port=8888, debug=True)

  webserver.websocket('/volume-value',
      SharedValue(20, on_change=volume_updated))
  webserver.websocket('/tone-value',
      SharedValue(20, on_change=tone_updated))
  webserver.websocket('/sustain-value',
      SharedValue(20, on_change=sustain_updated))

  webserver.static_files('/', './static')
  print('Listening on %s' % webserver.url)
  webserver.run()

def volume_updated(value, connection):
  # TODO: Communicate with LED bar graph
  print('Volume value: ', value)

def tone_updated(value, connection):
  print('Tone value: ', value)

def sustain_updated(value, connection):
  print('Sustain value: ', value)

if __name__ == '__main__':
  main()
