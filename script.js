
    $(form).ready(function(e){
        e.preventDefault()
       console.log('select_link clicked');
        $.ajax({
            url: "demo_test.txt", 
            success: function(result){
        $("#div1").html(result);
        }});
})
