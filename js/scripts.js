// business logic
function Contact(first, last, number, email) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = number;
  this.emailAdress = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

  // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedPhoneNumber = $("input#new-phone-number").val();
      var inputtedEmailAdress= $("input#new-email-adress").val();

      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAdress);

      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $(".contact").click(function() {
    $("#show-contact").last().show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".phone-number").text(newContact.phoneNumber);
    $(".email-adress").text(newContact.emailAdress);
  });

    });
  });
