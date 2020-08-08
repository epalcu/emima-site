$('#messageForm').submit((e) => {
    e.preventDefault();
    
    var formData = {
        'name': $('#name')["0"]["value"],
        'email': $('#email')["0"]["value"],
        'message': $('#directMessage')["0"]["value"]
    };
    
    return $.ajax({
        url: "/directMessage",
        type: "POST",
        data: JSON.stringify(formData),
        contentType: "application/json;charset=UTF-8",
        complete: function(message) {
            let status = displayFlashMessage($("#messageStatus"), message);
            
            if (status == 200) {
                $("#divName").load(document.URL + ' #divName');
                $("#divEmail").load(document.URL + ' #divEmail');
                $("#divMessage").load(document.URL + ' #divMessage');
            }
        }
    });
});