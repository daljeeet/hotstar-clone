let imgArr = [
    {
      Poster: `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1298/1351298-h-66706310312e`,
      Title: "Dahan:Raakan ka Rahasya",
      category: "Mystery",
      IMDb_rating: "Hindi",
      release_date: 2022,
      about: `A disgraced IAS officer sets out to vindicate herself and takes up a strange case in Shilapura, a land with occult practices.`,
    },
    {
      Poster: `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6`,
      Title: `Cuttputlli`,
      category: "Mystery",
      IMDb_rating: "Hindi",
      release_date: 2022,
      about: `When a small town gets plunged into the nightmare of serial killings, orrkie cop Arjun embarks on a chanse for the truth and unravels a gruesome conspiracy.`,
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2834/742834-h`,
        Title:"Criminal Justice",
        category:'Drama',
        IMDb_rating:'Hindi',
        release_date:2022,
        about: `A one-night stand truns into a nightmare when Aditya wakes up coverted in blood. All evidence is against him, but he doesnt' remember anything. Is he guilty?`
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8315/1328315-h-017b4fc66d35`,
        Title:`Thor: Love and Thunder`,
        category:'Action',
        IMDb_rating:'Hindi',
        release_date:2022,
        about:`The God of Thunder teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster to take on a galactic killer known as Gorr the God Butcher.`
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8863/1348863-h-0d3a2927b302`,
        Title:'Vikrant Rona',
        category:'Action',
        IMDb_rating:"Hindi",
        release_date:2022,
        about:`When a seires of mysterious events stirs pandemonium in a village, and eccentric cop Vikrant Rona Sets out to solve the case wherein everyone is under the rader.`
    }
  ];
  let carsol = document.querySelector('#carsol')// making a carsol which will change automatically after given time;
  function carousel(element) {  // carousel function which takes an object as perameter;
      carsol.innerHTML =
    `<div id="carsol_div">
      <div id="carsol_details">
  
        <h3 class='carsol_details_name'>${element.Title}</h3>
        <div class="carsol_details_titles">
          <p>${element.IMDb_rating}</p>
          <p>${element.category}</p>
          <p>${element.release_date}</p>
        </div>
        <div class="carsol_details_about">
          <p>${element.about}</p>
        </div>
      </div>
      <div id='carsol_middle'></div>
      <div id='carsol_image'>
      <img src=${element.Poster} >
      </div>
      <div 
    </div>`
  }
  
  function carouselSlider(data){
    if(data==='none'){
      showMovieDetails()
    }else{
  
      let i=0
      carousel(imgArr[3]); // calling the carousel function for 1st tiem appending data;
      setInterval(() => {
        if(i==imgArr.length){
          i=0
        }
      carousel(imgArr[i]);  // calling the carousel function after every 4 seconds
      i++
    }, 4000);
  }
  }
  export default carouselSlider;