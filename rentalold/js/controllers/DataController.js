fullapp.value('clientId', { value: 'a1234x' });
fullapp.controller('DemoController1', ['clientId', function DemoController(clientId) {
    this.clientId = clientId;
    this.change = function(value) {
        clientId.value = value;
    }
}]);
