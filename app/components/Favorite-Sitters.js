var React = require("react");

var Favorite-Sitters = React.createClass({
  render: function(){
    return (
      <div className="row sitterRow">
        <div className="col-md-12">
          <h2>Favorite Sitters</h2>

          <div class="col-md-2 box text-center favSitter">
            <p><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> sitter 1</p>  
            
            <button type="button" class="btn btn-default"> Book Sitter
            </button>
          </div>

          <div class="col-md-2 box text-center favSitter">
            <p><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> sitter 2</p>  
            
            <button type="button" class="btn btn-default"> Book Sitter
            </button>
          </div>

          <div class="col-md-2 box text-center favSitter">
            <p><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> sitter 3</p>  
            
            <button type="button" class="btn btn-default"> Book Sitter
            </button>
          </div>

          <div class="col-md-2 box text-center favSitter">
            <p><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> sitter 4</p>  
            
            <button type="button" class="btn btn-default"> Book Sitter
            </button>
          </div>

          <div class="col-md-2 box text-center favSitter">
            <p><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> sitter 5</p>  
            
            <button type="button" class="btn btn-default"> Book Sitter
            </button>
          </div>

          <div class="col-md-2 box text-center favSitter">
            <p><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> sitter 6</p>  
            
            <button type="button" class="btn btn-default"> Book Sitter
            </button>
          </div>
        </div> <!-- end container of all fav sitters -->
      </div> <!-- end favSitterRow -->
    )
  }
})

module.exports = Favorite-Sitters;

  
 