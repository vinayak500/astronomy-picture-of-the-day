


function displayImage(data){

    $('#explanation').html(data.explanation);

    $('<img>',{
        src:data.url,
        height:'25%',
        width:'25%',
    }).appendTo('#image-container');




}

$.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=CByVA9lNzmBeDlXjxibFHsHefYx71kSxNc63Yf2i',
    method:'GET',
    success: displayImage
})