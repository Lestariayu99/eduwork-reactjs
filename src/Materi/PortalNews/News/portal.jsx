import React from 'react';

const App = () => {
  return (
    <div>
      <div className="container-fluid">
        
        <div>
          <div className="row m-3" id="newsType"></div>
          <div className="row me-2 ms-2" id="newsdetails"></div>
        </div>
      </div>

      <script src="index.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
