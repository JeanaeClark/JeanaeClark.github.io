document.addEventListener("DOMContentLoaded", () => {
    let but = document.getElementById("but");
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    let click_button = document.querySelector("#click-photo");
    let canvas = document.querySelector("#canvas");
    vid.muted = true;
    but.addEventListener("click", () => {

        // Accessing the user camera and video.
        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {

                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
    });

    click_button.addEventListener('click', function() {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        let image_data_url = canvas.toDataURL('image/jpeg');
 
        // data url of the image
        console.log(image_data_url);
 });
});