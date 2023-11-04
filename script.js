document.getElementById('select-btn').addEventListener('click', () => {
    const fileUpload = document.getElementById('image-upload');
    const file = fileUpload.files[0];
    const fr = new FileReader();
   
    fr.onload = () => {
      document.getElementById('image-preview').src = fr.result;
    };
   
    fr.readAsDataURL(file);
   });
   
   document.getElementById('predict-btn').addEventListener('click', () => {
    // call your deep learning model here
    console.log('Predict button clicked');
   });
   
    document.getElementById("refreshButton").addEventListener("click", function () {
    location.reload();
    });

    // document.getElementById('refresh-btn').addEventListener('click', () => {
    // location.reload();
    // remove selected image from preview
    // document.getElementById('image-preview').src = ''; 
    //});