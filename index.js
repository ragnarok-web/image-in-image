const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();  /*waiting for the user to select wich screen or window to share */
        videoElement.srcObject = mediaStream;  /*returns the object(mediaStream) which serves as the source of the media associated with the HTMLMediaElement (video).*/
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {

    }
}
button.addEventListener('click', async () => {
// Disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;

});
selectMediaStream();
