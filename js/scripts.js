$(document).ready(function(){
  $(form#shipInfo).submit(function(event){
    event.preventDefault();

    var inputtedSenderFirstName = $(#input-new-sender-first-name).val();
    var inputtedSenderLastName = $(#input-new-sender-last-name).val();
    var inputtedSenderaddress1 = $(#input-new-sender-address1).val();
    var inputtedSenderAddress2 = $(#input-new-sender-address2).val();
    var inputtedSenderCity = $(#input-new-sender-city).val();
    var inputtedSenderState = $(#input-new-sender-state).val();
    var inputtedSenderZipcode = $(#input-new-sender-zipcode).val();
    var inputtedSenderCountry = $(#input-new-sender-country).val();
    var inputtedSenderAccount = $(#input-new-sender-account).val();

    var inputtedRecipientFirstName = $(#input-new-recipient-first-name).val();
    var inputtedRecipientLastName = $(#input-new-recipient-last-name).val();
    var inputtedRecipientaddress1 = $(#input-new-recipient-address1).val();
    var inputtedRecipientAddress2 = $(#input-new-recipient-address2).val();
    var inputtedRecipientCity = $(#input-new-recipient-city).val();
    var inputtedRecipientState = $(#input-new-recipient-state).val();
    var inputtedRecipientZipcode = $(#input-new-recipient-zipcode).val();
    var inputtedRecipientCountry = $(#input-new-recipient-country).val();


  });//end form

})://end doc ready
