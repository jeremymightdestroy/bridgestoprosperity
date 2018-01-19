angular.module('myApp',['ngMaterial'])
.controller('ProductController', function( $scope, $products, $mdMedia) {
    $scope.$mdMedia           = $mdMedia;

    this.filterBy         = "All";
    this.sortedBy         = "Upcoming"    
    this.availableFilters = $products.availableFilters;
    this.availableSorts   = $products.availableSorts; 
    this.catalog          = $products.catalog;        
})
.factory('$products',function(){
  return {
    availableFilters : ["All","Workshops","Competitions","Spanish Classes","Parties", "ProfTalks"],
    availableSorts   : ["Upcoming", "Archived"],
    catalog : makeJackets()    
  };
  
  function makeJackets() {    
    var list=[ ], master = {
      imageURL : "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
      title : "Winter Jacket",
      price : "$99.99"
    }
    
    for (var j=0;j<6;j++) {
      list.push(angular.extend({},master));
    }    
    return list;    
  }
  
})