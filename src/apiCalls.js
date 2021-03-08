const apiCalls = {
  getTopBirds: () => {
    return fetch('https://api.ebird.org/v2/data/obs/US-CO/recent?maxResults=30&key=jcsp15jhp6hi')
  }
}

export default apiCalls;
