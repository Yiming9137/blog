const API = "https://stats-api.yiming9137.workers.dev"

export function track(site, type, id) {
  const url = `${API}?site=${site}&type=${type}&id=${encodeURIComponent(id)}`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url)
  } else {
    fetch(url, { method: "POST", keepalive: true }).catch(() => {})
  }
}
