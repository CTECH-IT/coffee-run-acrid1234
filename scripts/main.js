(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    const SERVER_URL = 'https://saturn.rochesterschools.org:8080/json';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let Validation = App.Validation;

    let remoteDS = new RemoteDataStore(SERVER_URL);

    let myTruck = new Truck('12345', remoteDS);
    window.myTruck = myTruck;

    let checkList = new CheckList(CHECKLIST_SELECTOR);

    let formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    })

    

    console.log(formHandler);

    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    
    formHandler.addInputHandler(Validation.isCompanyEmail);


})(window);