$(document).ready(()=>{
    /* 
    Until there is a solution to the pickadate bug, we're using different inputs.
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.datepicker').on('close', ()=>{
        $(document.activeElement).blur();
    });
    */
    var numAffRow = 1;
    
    $('select').material_select();
    $('.modal').modal();
    
    expandRow = (item) => {
        item.on("click", () => {
            $("#affiliations .affiliation-row:last-child").clone().appendTo($("#affiliations"));
            expandRow($("#affiliations .affiliation-row:last-child .add-affiliation"));
            deleteRow($("#affiliations .affiliation-row:last-child .remove-affiliation"))
            numAffRow = numAffRow + 1;
            Waves.displayEffect();
            $('.tooltipped').tooltip({delay: 50});
            checkAffRows();
        });
    }

    deleteRow = (item) => {
        item.on("click", () => {
            item.tooltip('remove');
            item.parent().parent().remove();
            numAffRow = numAffRow - 1;
            checkAffRows();
        });
    }

    checkAffRows = () => {
        if (numAffRow >= 2) {
            $(".remove-affiliation").removeClass("disabled");
        } else {
            $(".remove-affiliation").addClass("disabled");
        }
    }

    expandRow($(".add-affiliation"));
    deleteRow($(".remove-affiliation"));
});