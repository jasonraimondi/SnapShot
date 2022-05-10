// Libhoney is the Honeycomb SDK for sending telemetry Events to Honeycomb's API
// Docs for Libhoney live at https://docs.honeycomb.io/getting-data-in/javascript/libhoney/
// Here's our Honeycomb SDK configuration
import Libhoney from 'libhoney';

let hny = new Libhoney({
  writeKey: 'rcNoy3kfxbVTkvzAzv8glC',
  dataset: 'snapshop-app-events',
});

export function sendStartup() {
  let ev = hny.newEvent();
  ev.addField('event_type', 'startup');
  ev.addField("user_agent", typeof window && window.navigator && window.navigator.userAgent );
  ev.send();
}

export function sendSearch(searchInput) {
  const searchEvent = hny.newEvent();
  searchEvent.add({
    event_type: 'search',
    search_term: searchInput,
  });
  searchEvent.send();
}
