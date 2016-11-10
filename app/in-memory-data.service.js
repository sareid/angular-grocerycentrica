"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var foods = [
            { id: 11, name: 'Bananas' },
            { id: 12, name: 'Apples' },
            { id: 13, name: 'Bread' },
            { id: 14, name: 'Hot Sauce' }
        ];
        return { foods: foods };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map