'use strict';
{
    let lastChecked = null;
    function show(selector) {
        document.querySelectorAll(selector).forEach(function (el) {
            el.classList.remove('hidden');
        });
    }

    function hide(selector) {
        document.querySelectorAll(selector).forEach(function (el) {
            el.classList.add('hidden');
        });
    }

    function showQuestion(options) {
        hide(options.acrossClears);
        show(options.acrossQuestions);
        hide(options.allContainer);
    }

    function showClear(options) {
        show(options.acrossClears);
        hide(options.acrossQuestions);
        document.querySelector(options.actionContainer).classList.remove(options.selectedClass);
        show(options.allContainer);
        hide(options.counterContainer);
    }

    function reset(options) {
        hide(options.acrossClears);
        hide(options.acrossQuestions);
        hide(options.allContainer);
        show(options.counterContainer);
    }

    function clearAcross(options) {
        reset(options);
        const acrossInputs = document.querySelectorAll(options.acrossInput);
        acrossInputs.forEach(function (acrossInput) {
            acrossInput.value = 0;
        });
        document.querySelector(options.actionContainer).classList.remove(options.selectedClass);
    }

    function checker(actionCheckboxes, options, checked) {
        if (checked) {
            showQuestion(options);
        } else {
            reset(options);
        }
        actionCheckboxes.forEach(function (el) {
            el.checked = checked;
            el.closest('tr').classList.toggle(options.selectedClass, checked);
        });
    }

    function updateCounter(actionCheckboxes, options) {
        const sel = Array.from(actionCheckboxes).filter(function (el) {
            return el.checked;
        }).length;
        const counter = document.querySelector(options.counterContainer);
        const actions_icnt = Number(counter.dataset.actionsIcnt);
        counter.textContent = interpolate(ngettext('%(sel)s of %(cnt)s selected', '%(sel)s of %(cnt)s selected', sel), { sel: sel, cnt: actions_icnt }, true);
        const allToggle = document.getElementById(options.allToggleId);
        allToggle.checked = sel === actionCheckboxes.length;
        if (allToggle.checked) {
            showQuestion(options);
        } else {
            clearAcross(options);
        }
    }

    function affectedCheckboxes(target, withModifier) {
        const multiSelect = (lastChecked && withModifier && lastChecked !== target);
        if (!multiSelect) {
            return [target];
        }
        const checkboxes = Array.from(actionCheckboxes);
        const targetIndex = checkboxes.findIndex(el => el === target);
        const lastCheckedIndex = checkboxes.findIndex(el => el === lastChecked);
        const startIndex = Math.min(targetIndex, lastCheckedIndex);
        const endIndex = Math.max(targetIndex, lastCheckedIndex);
        const filtered = checkboxes.filter((el, index) => (startIndex <= index) && (index <= endIndex));
        return filtered;
    }

    const defaults = {
        actionContainer: "div.actions",
        counterContainer: "span.action-counter",
        allContainer: "div.actions span.all",
        acrossInput: "div.actions input.select-across",
        acrossQuestions: "div.actions span.question",
        acrossClears: "div.actions span.clear",
        allToggleId: "action-toggle",
        selectedClass: "selected"
    };

    window.Actions = function (actionCheckboxes, options) {
        options = Object.assign({}, defaults, options);
        let list_editable_changed = false;
        let lastChecked = null;
        let shiftPressed = false;

        document.getElementById(options.allToggleId).addEventListener('change', function (event) {
            const isChecked = this.checked;
            actionCheckboxes.forEach(function (checkbox) {
                checkbox.checked = isChecked;
            });
            checker(actionCheckboxes, options, isChecked);
            updateCounter(actionCheckboxes, options);
        });

        document.addEventListener('keydown', (event) => {
            shiftPressed = event.shiftKey;
        });

        document.addEventListener('keyup', (event) => {
            shiftPressed = event.shiftKey;
        });

        Array.from(document.querySelectorAll('tr')).forEach(function (el) {
            const checkbox = el.querySelector('input.action-select');
            if (checkbox) {
                checkbox.addEventListener('change', function (event) {
                    const target = event.target;
                    const checkboxes = affectedCheckboxes(target, shiftPressed);
                    checker(checkboxes, options, target.checked);
                    updateCounter(actionCheckboxes, options);
                    lastChecked = target;
                });
            }
        });

        document.querySelector('#changelist-form button[name=index]').addEventListener('click', function (event) {
            if (list_editable_changed) {
                const confirmed = confirm(gettext("You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost."));
                if (!confirmed) {
                    event.preventDefault();
                }
            }
        });

        const el = document.querySelector('#changelist-form input[name=_save]');
        if (el) {
            el.addEventListener('click', function (event) {
                if (document.querySelector('[name=action]').value) {
                    const text = list_editable_changed
                        ? gettext("You have selected an action, but you haven’t saved your changes to individual fields yet. Please click OK to save. You’ll need to re-run the action.")
                        : gettext("You have selected an action, and you haven’t made any changes on individual fields. You’re probably looking for the Go button rather than the Save button.");
                    if (!confirm(text)) {
                        event.preventDefault();
                    }
                }
            });
        }
        window.addEventListener('pageshow', (event) => updateCounter(actionCheckboxes, options));
    };

    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function () {
        const actionsEls = document.querySelectorAll('tr input.action-select');
        if (actionsEls.length > 0) {
            Actions(actionsEls);
        }
    });
}
