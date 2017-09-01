import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log(id);
      });
    
    // mengapa pake observable tuk retrieve 'id' ?
    // dikarenakan ngOnInit hanya sekali di eksekusi, 
    //    sehingga kalau dak pake observable, maka dak bisa dapatin "updated id" (updated id = 2)
    //    (mis: id yg pertama adalah 1, kita tekan tombol "previous / next", id berubah ke 2)
    // dengan PAKE OBSERVABLE, maka kita bisa dapatin id = 2 (karna setiap ada perubahan di id, 
    //    maka observable bakal kasih semacam notifikasi)
  }

}
