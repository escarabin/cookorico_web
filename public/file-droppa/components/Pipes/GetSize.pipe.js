var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GetSizePipe = (function () {
    function GetSizePipe() {
    }
    GetSizePipe.prototype.transform = function (value) {
        var bytes = value || 0, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], k = 1000, i = Math.floor(Math.log(bytes) / Math.log(k));
        if (bytes === 0) {
            return '0 Byte';
        }
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    };
    GetSizePipe = __decorate([
        core_1.Pipe({ name: 'getSize' }), 
        __metadata('design:paramtypes', [])
    ], GetSizePipe);
    return GetSizePipe;
})();
exports.GetSizePipe = GetSizePipe;
