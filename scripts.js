document.addEventListener('DOMContentLoaded', function() {
    fetch('get_videos.php')
        .then(response => response.json())
        .then(videos => {
            const videoContainer = document.getElementById('video-container');
            videos.forEach(video => {
                const videoDiv = document.createElement('div');
                videoDiv.className = 'video';
                videoDiv.innerHTML = `
                    <h2>${video.title}</h2>
                    <p>${video.description}</p>
                    <p><strong>Режиссер:</strong> ${video.athor}</p>
                    <p><strong>Год выхода:</strong> ${video.year}</p>
                    <img src="${video.poster}">
                `;
                videoContainer.appendChild(videoDiv);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
});