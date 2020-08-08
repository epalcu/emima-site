$(document).on('click', '[id=scheduleButton1]', function(e) {
    e.preventDefault();
    
    getHours($('#divDate1'));
});

$(document).on('click', '[id=scheduleButton2]', function(e) {
    e.preventDefault();
    
    getHours($('#divDate2'));
});

const getHours = (divDate) => {
    divDate['0']['style']['display'] = 'inline-block'
    
    return $.ajax({
        url: '/services/hours', 
        type: 'GET',
        contentType: 'application/json;charset=UTF-8',
        success: function(hours) {
            divDate['0']['nextElementSibling']['innerHTML'] = hours;
        }
    });
}

$(document).on('click', '[id=card]', function(e) {
    e.preventDefault();
    
    console.log(e.target.style);
    if (e.target.style.background == 'lavender') {
        e.target.style.background = 'white';
        e.target.style.color = '#9FA4C4';
    }
    else {
        e.target.style.background = 'lavender';
        e.target.style.color = 'white';
    }
});

$(function() {
    $("#dateTimePicker1").datetimepicker({
        useCurrent: true,
        daysOfWeekDisabled: [0, 6],
        format: 'L'
    });
});

$(function() {
    $("#dateTimePicker2").datetimepicker({
        useCurrent: true,
        daysOfWeekDisabled: [0, 6],
        format: 'L'
    });
});