import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../interface";

@Component({
	selector: "Productdetails",
	moduleId: module.id,
	templateUrl: "./productdetails.component.html",
	styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
	product: any;
	constructor(private cs: CommonService, private param:ActivatedRoute) {
	}

	ngOnInit(): void {
		let id: any = this.param.snapshot.paramMap.get('id');
		this.cs.getProductById(id).subscribe(res => {
			console.log(res.data);
			this.product = res.data;
		})
	}
}