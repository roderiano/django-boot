document.addEventListener("DOMContentLoaded", function () {
    var labels = document.querySelectorAll('#{{ opts.model_name }}_form label');
    labels.forEach(function (label) {
        label.classList.add('form-label');
    });

    var labeledInputs = document.querySelectorAll('#{{ opts.model_name }}_form input[type="text"], #{{ opts.model_name }}_form input[type="checkbox"], #{{ opts.model_name }}_form input[type="radio"]');
    labeledInputs.forEach(function (input) {
        var id = input.getAttribute('id');
        if (id) {
            var associatedLabel = document.querySelector('label[for="' + id + '"]');
            if (associatedLabel && !associatedLabel.classList.contains('form-label')) {
                associatedLabel.classList.add('form-label');
            }
        }
    });

    var helpDivs = document.querySelectorAll('#{{ opts.model_name }}_form .help');
    helpDivs.forEach(function (helpDiv) {
        helpDiv.classList.add('text-muted', 'small');
    });

    var fieldsets = document.querySelectorAll('#{{ opts.model_name }}_form fieldset');
    fieldsets.forEach(function(fieldset) {
        fieldset.classList.add('card');
    });
});
