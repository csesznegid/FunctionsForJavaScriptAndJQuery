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

    /**
     * Forces a field to only accept numeric values
     * (Custom jQuery method)
     *
     * @returns {void}
     * @public
     */
    $.fn.numericField = function() {
        // Store current scope's "this" in the variable "that"
        // (some developers like to use the variable name "$this" for such purpose)
        let that = this;

        // KeyUp event
        $(that).keyup(function() {
            // Set HTML pattern property to only accept numeric values
            // (only creates a red border if the rule is broken)
            $(that).prop('pattern', '\\d*');

            // Replace/remove all non-numeric characters in the field's value
            $(that).val(
                $(that).val().replace(/[^0-9]/g, '')
            );
        });
    };
});

/**
 * Toggle password on button click
 *
 * @param   {string} btnId
 * @param   {string} pwdFieldId
 * @returns {void}
 * @public
 */
function togglePassword(btnId, pwdFieldId)
{
    $('#' + btnId).click(function() {
        const fieldSelector = ('#' + pwdFieldId);

        // If the field has the type "password", change it to "text"
        let type = $(fieldSelector).prop('type');
        if ('password' === type) {
            $(fieldSelector).prop('type', 'text');
        }
        // Otherwise change it back to "password"
        else if ('text' === type) {
            $(fieldSelector).prop('type', 'password');
        }
    });
}