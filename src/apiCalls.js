const apiCalls = {
  getTopBirds: () => {
    return fetch('https://api.ebird.org/v2/data/obs/US-CO/recent?maxResults=30&key=jcsp15jhp6hi')
  },

  getSingleBird: (code) => {
    return fetch(`https://api.ebird.org/v2/data/obs/US/recent/${code}?key=jcsp15jhp6hi`)
      .then(response => response.json())
  }
}

export default apiCalls;
