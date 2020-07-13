$(function () {

    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();

        let selectedCat = $(this).data('filter');
        let allCategories = $("[data-cat]");

        if (selectedCat == 'All') {
            allCategories.removeClass('hide');
        }
        else {
            allCategories.each(function () {
                let workCat = $(this).data('cat')

                if (workCat != selectedCat) {
                    $(this).addClass('hide');
                }
                else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    let modalShow = $("[data-modal-show]");
    modalShow.on("click", function (event) {
        event.preventDefault();

        let modalId = $(this).data("modal-show");
        $(modalId).addClass("show");

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            })
        }, 500);
    });

    let modalClose = $("[data-modal-close]");
    modalClose.on("click", function () {

        let modalId = $(this).data("modal-close");

        $(modalId).find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $(modalId).removeClass("show");
        }, 500);
    });

    let nav = $('#nav');
    $('#burger').on('click', function(event){
        event.preventDefault();

        nav.toggleClass('nav--show');
        console.log($("#burger"));
    })

});