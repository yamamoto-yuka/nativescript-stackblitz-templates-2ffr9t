"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_service_1 = require("../common.service");
const router_1 = require("@angular/router");
let ProductdetailsComponent = class ProductdetailsComponent {
    constructor(cs, param) {
        this.cs = cs;
        this.param = param;
    }
    ngOnInit() {
        let id = this.param.snapshot.paramMap.get('id');
        this.cs.getProductById(id).subscribe(res => {
            console.log(res.data);
            this.product = res.data;
        });
    }
};
ProductdetailsComponent = __decorate([
    core_1.Component({
        selector: "Productdetails",
        moduleId: module.id,
        templateUrl: "./productdetails.component.html",
        styleUrls: ['./productdetails.component.css']
    }),
    __metadata("design:paramtypes", [common_service_1.CommonService, router_1.ActivatedRoute])
], ProductdetailsComponent);
exports.ProductdetailsComponent = ProductdetailsComponent;
