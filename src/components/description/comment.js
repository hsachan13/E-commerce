import './reviews.css';

const Comment = () =>{
  return(
    <div class="container-fluid whole">
    <div class="row">
      <div class="left col-6">
        <div className="icon">
          <i class=" fa fa-user-circle"></i>
        </div>
        <div class="comment">
          <h3>JOHN DOE</h3>
          <p className="comment-review">august 14,2018</p>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <hr />

        </div>
      </div>
      <div class="comment col-6">
        <p className="comm-lead">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
    </div>
    </div>
   )
}

export default Comment;