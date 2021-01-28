
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

      let searchpage = document.querySelector("main")
      searchpage.classList.add("googlePageStyle")
      let pixname = document.createElement("input")
      pixname.type = "text"
      pixname.placeholder = "Google your image here"
      let  searchBtn = document.createElement("button")
      searchBtn.innerHTML = "Search"
      searchpage.appendChild(pixname)
      searchpage.appendChild(searchBtn)
      
      // web page with picures
      let pixpage = document.querySelector("div")
      let  deletedImgArray =[]
      
      
 

      // creating the search

      searchBtn.addEventListener("click", async (e)=>{

      let response = await fetch('http://www.splashbase.co/api/v1/images/search?query=' + pixname.value)
     
      if(response.ok)
      {
        searchpage.style.display ="none"
       let pixarray = await response.json()
       
        pixpage.classList.add("pictureDisplayStyle")
        
        for(i=0; i < pixarray.images.length;i++)
        {
          let picture = document.createElement("img")
           picture.src = pixarray.images[i].url
           picture.addEventListener("click",(e)=>{
                console.log(e)
                deletedImgArray.push(e.currentTarget) 
                e.currentTarget.classList.add("imgContainerStyle")

           })
           pixpage.appendChild(picture)
        
        }

      }
      else{
        console.log(response.status)
      }


      

      
      })