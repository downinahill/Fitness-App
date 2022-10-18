

export const exerciseOptions = {
    method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '0ddebc98afmshbab283cb50c1635p16a122jsnb8c70577a57b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ddebc98afmshbab283cb50c1635p16a122jsnb8c70577a57b',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)

    const data = await response.json()

    return data
}