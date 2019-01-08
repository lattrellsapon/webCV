// $(document).ready(function()
// {
//     $("#webDevSkills").click(function()
//     {
//         $("#hide").fadeOut();
//     });
// });

// $(document).ready(function()
// {
//     $("#webDevSkills").click(function()
//     {
//         $("#hide").fadeIn();
//     });
// });


$("#showCertificateButton").click( ()=>
{   
    $(".certificates-wrapper").fadeIn(1000);
    $(".certificates-wrapper").css("display", "grid");
    
    $("#showCertificateButton").hide();
    $("#hideCertificateButton").css("display", "inline");
});

$("#hideCertificateButton").click( ()=>
{   
    // $("#udemyCertificates").fadeOut();
    $(".certificates-wrapper").fadeOut(1000);
    $("#hideCertificateButton").html("Show Certificates");
    $("#hideCertificateButton").attr("id", "showCertificateButton");


    
    // $("#showCertificateButton").html("Hide Certificates");
    // $("#showCertificateButton").attr("id", "hideCertificateButton");
});