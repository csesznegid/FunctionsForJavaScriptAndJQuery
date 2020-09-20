/**
 * The original jQuery val() method
 *
 * @type {function}
 * @public
 */
let jQueryOriginalVal = $.fn.val;

/**
 * Define variables and functions
 * when the whole document is loaded/ready
 */
$(document).ready(function() {
    /**
     * Override jQuery's val() method
     *
     * @param   {*} value
     * @returns {string|*}
     * @public
     */
    $.fn.val = function(value) {
        // If no value was given and the field has the type "password"
        // it gives back ":P" as the value
        if (undefined === value && 'password' === $(this).prop('type')) {
            return ':P';
        }

        // Invoke the original jQuery val() method
        // with the current method's arguments as an Array
        return jQueryOriginalVal.apply(this, Array.from(arguments));
    };

    /**
     * Refresh an element
     * (Custom jQuery method)
     *
     * @returns {void}
     * @public
     */
    $.fn.refresh = function() {
        $(this).html(
            $(this).clone()
        );
    };
});