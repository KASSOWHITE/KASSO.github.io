
  // Replace with your own YouTube API key and playlist ID
  const apiKey = 'AIzaSyBvv8LZWI2Q5G1k66dyvdFMZeQQSjn_vuc';
const playlistUrl = 'https://youtube.com/playlist?list=PLMAn9UGCU30JItjTmyjCOZ09KqLt1FBN_';

const playlistId = playlistUrl.match(/list=([\w-]+)/)[1];

let player1, player2, player3, player4;

function onYouTubeIframeAPIReady() {
  // Load videos from the playlist
  fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${playlistId}&key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data from YouTube API');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data:', data); // Log the entire data object

      if (!data.items || data.items.length === 0) {
        throw new Error('No items found in the YouTube playlist');
      }

      const videoIds = data.items.map(item => item.snippet.resourceId.videoId);

      // Create YouTube players with the first 4 video IDs
      player1 = new YT.Player('player1', { height: '200', width: '300', videoId: videoIds[0] });
      player2 = new YT.Player('player2', { height: '200', width: '300', videoId: videoIds[1] });
      player3 = new YT.Player('player3', { height: '200', width: '300', videoId: videoIds[2] });
      player4 = new YT.Player('player4', { height: '200', width: '300', videoId: videoIds[3] });
    })
    .catch(error => console.error('Error fetching YouTube playlist:', error));
}

  

