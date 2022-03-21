(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.Formhandler;
    let CheckList = App.CheckList;

    let myTruck = new Truck('12345', new DataStore());
    window.myTruck = myTruck;

    let checkList = new CheckList(CHECKLIST_SELECTOR);

    let formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    })

    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

})(window);