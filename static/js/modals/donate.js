$('#donateForm').submit((e) => {
    e.preventDefault();
    
    var formData = {
        'name': $('#donateName')["0"]["value"],
        'email': $('#donateEmail')["0"]["value"],
        'amount': $('#donateAmount')["0"]["value"],
        'message': $('#donateMessage')["0"]["value"]
    };
    
    return $.ajax({
        url: "/donate",
        type: "POST",
        data: JSON.stringify(formData),
        contentType: "application/json;charset=UTF-8",
        complete: function(message) {
            let status = displayFlashMessage($("#donateStatus"), message);
            
            if (status == 200) {
                $("#divDonateName").load(document.URL + ' #divDonateName');
                $("#divDonateEmail").load(document.URL + ' #divDonateEmail');
                $("#divDonateAmount").load(document.URL + ' #divDonateAmount');
                $("#divDonateMessage").load(document.URL + ' #divDonateMessage');
            }
        }
    });
});