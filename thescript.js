
      /*
      
        Google for pictures

        You are creating a search engine for pictures.
        The user should be able to access your webpage and seach for some pictures.
        
        - When the user clicks on a picture, remove it from the page
        - When a new search is done, the previous list should be removed

        [HINT]
        - use fetch to retrieve the pictures
        - create at runtime the elements on your container
        - use bootstrap column system to create a responsive app
        - check the response from the API! It's not giving you back and array, but an object containing an array named "images"!

        API Docs: http://www.splashbase.co/api
        Example: http://www.splashbase.co/api/v1/images/search?query=laptop

        You should change the value after "query="

      */
    
      // creating container for the search space

      let searchpage= document.querySelector("div")
      searchpage.classList.add("googlePageStyle")
      let pixname = document.createElement("input")
      pixname.type = "text"
      pixname.placeholder = "Google your image here"
      let  searchBtn = document.createElement("button")
      searchpage.innerHTML = "Search"
      searchpage.appendChild(pixname)
      searchpage.appendChild(searchBtn)
      