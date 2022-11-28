// Global variables
const videoElement = document.getElementById( 'video' );
const button = document.getElementById( 'button' );

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async () =>
{ 
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () =>
        {
            videoElement.play();
        }
    } catch (error) {
        alert( 'Something went wrong. Please try again' );
    }
}

button.addEventListener( 'click', async () =>
{
    //Disable Button
    button.disabled = true;
    //Start picture in picture 
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
} );

//Onload
selectMediaStream();