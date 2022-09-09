const axios = require("axios");

async function tikTok_converter(tikTok_link) {
  try {
    const options = {
      method: 'GET',
      url: 'https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/',
      params: { link: tikTok_link},
      headers: {
        'X-RapidAPI-Key': 'a5d6adc0c5msh01c2cb6bd94397ep1255afjsnbe2479545631',
        'X-RapidAPI-Host': 'tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com'
      }
    };

    
    const response = await axios.request(options);
    const tikTok_video = await response.data.result.video.url_list[0];
    return tikTok_video;

  } catch (error) {
    console.log(error.message);
  }


}

module.exports = { tikTok_converter };