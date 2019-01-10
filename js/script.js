$("#showCertificateButton").click( ()=>
{   
    $(".certificates-wrapper").fadeIn(1000);
    $(".certificates-wrapper").css("display", "grid");
    
    $("#showCertificateButton").hide();
    $("#hideCertificateButton").show();

});

$("#hideCertificateButton").click( ()=>
{   
    $(".certificates-wrapper").fadeOut(1000);
    $("#hideCertificateButton").hide();
    $("#showCertificateButton").show();

});