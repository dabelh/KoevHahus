import { Component, OnInit } from '@angular/core';


const posts = [
  { description: 'acai bowl', image: 'https://cdn.livekindly.co/wp-content/uploads/2017/07/smoothie.jpg' },
  { description: 'bella thorn', image: 'https://talentrecap.com/wp-content/uploads/2020/08/Bella-Thorne-OnlyFans.png' },
  { description: 'thirst trap', image: 'https://i.pinimg.com/474x/fa/86/b1/fa86b154a244e8d5e07109ed15ce7731.jpg' }];
@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {
  totaLikes = 0;
  filteredPosts = posts;
  myinput = '';

  constructor() { }

  ngOnInit(): void {
  }
  filterPosts({ target: { value } }) {
    this.myinput = value;
    console.log(this.myinput)
  }
  addLike() {
    this.totaLikes++
  }
  send() {
    this.myinput = '';
  }

  //   test({target: {value}}){
  //       this.myinput = value;
  //   }

}
// GET
// /posts
// return an array of posts
// [{description, image, likes}, {description, image, likes}, {description, image, likes}]

// POST
// /posts
// create new post
// {
    // description: '',
    // image: ''
// }

// PATCH
// /posts/:id
// update post

// GET
// /posts/:id
// {
    // description
    // likes
    // image
    // comments: []
// }


// comment table:
// c_id
// p_id
// comment

// POST
// /comments/:pid
// {
//     comment: 'bla bla'
// }


