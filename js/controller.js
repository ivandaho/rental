'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    $scope.colorchange = function(sku) {
        var result;
        var found;

        for (var i=0, len = $scope.cart.items.length;
            i < len; i++ ) {
            if ($scope.cart.items[i].sku == sku ) { // if found
                // get the sku and break
                result = sku;
                found = true;
                break;
            } 
        }

        // traverse list
        for (var i=0, len = $scope.store.products.length;
            i < len; i++ ) {
            if ($scope.store.products[i].sku == sku ) { 
                // once REACHED
                // 100% to reach (based on sku)
                // change highlight if found
                if (found) {
                    $scope.store.products[i].highlighted = "green";
                    break;
                } else {
                    $scope.store.products[i].highlighted = "white";
                }

            }
        }

        /*
        ////////////////////////////////////////

        if ($scope.selected == true) {
            $scope.selected = false;
        } else {
            $scope.selected = true;
        }
*/
    }


    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}



