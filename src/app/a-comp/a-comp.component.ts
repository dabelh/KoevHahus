import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-a-comp',
    templateUrl: './a-comp.component.html',
    styleUrls: ['./a-comp.component.css']
})
export class ACompComponent implements OnInit {
    name = '';
    flag= '';
    constructor(private router: Router, private route: ActivatedRoute) {
        this.router = router;
        this.name = route.snapshot.params.name
    }

    ngOnInit(): void {
        fetch(`https://restcountries.eu/rest/v2/name/${this.name}`).then(res => res.json())
            .then(data => this.flag = data[0].flag)
    }

    goToPage() {
        3
        this.router.navigate(['/b', 'zvi']);
    }

}
