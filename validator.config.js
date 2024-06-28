const INVALID_FEEDBACK = "invalid-feedback";
const VALID_FEEDBACK = "valid-feedback";
const IS_INVALID = "is-invalid";
const IS_VALID = "is-valid";

$.validator.setDefaults({
  errorClass: `position-absolute text_sm ${INVALID_FEEDBACK}`,
  errorElement: "small",
  highlight: function (element, errorClass, validClass) {
    // add error class to the input element
    $(element).addClass(IS_INVALID).removeClass(IS_VALID);
    // add error class to the errorElement
    $(element.form)
      .find(`#${element.id}-error`)
      .addClass(INVALID_FEEDBACK)
      .removeClass(VALID_FEEDBACK);
  },
  unhighlight: function (element, errorClass, validClass) {
    // add valid class to the input element
    $(element).removeClass(IS_INVALID).addClass(IS_VALID);
    // add valid class to the errorElement
    $(element.form)
      .find(`#${element.id}-error`)
      .removeClass(INVALID_FEEDBACK)
      .addClass(VALID_FEEDBACK);
  },
});
