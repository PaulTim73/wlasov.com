$("#2-days").click(function () {
    if ($(this).val() == 'on') $(this).val("off"); else $(this).val("on");
    $("#4-days").val("off");
})
$("#4-days").click(function () {
    if ($(this).val() == 'on') $(this).val("off"); else $(this).val("on");
    $("#2-days").val("off");
})