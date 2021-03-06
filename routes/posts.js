const express = require('express');
const router = express.Router();
const axios = require('axios');

const api_key = "03c7be34ae4a13f6d8a98a10893e2100";
const BASE_URL="https://api.themoviedb.org/3/";

router.get('/trending', function(req, res) {
    // let url = 'https://jsonplaceholder.typicode.com/posts';
    // axios.get(url).then(posts => {
    //     //console.log(posts);
    //     res.json(posts.data);
    // }).catch(err =>{
    //     res.send(err);
    // })
    let carousel = []
    const url1 = 'https://api.themoviedb.org/3/movie/now_playing?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1'
    axios.get(url1).then(data => {
        for (var i = 0; i < Math.min(data.data.results.length, 10); i++) {
            carousel.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": data.data.results[i]["backdrop_path"] })
        }
        //console.log(carousel);
        res.json(carousel)
    }).catch(err => {
        res.send(err)
    });
});


// adding new 29
router.get('/trendingTVShows', function(req, res) {
    let carousel = []
    const url1 = 'https://api.themoviedb.org/3/trending/tv/day?api_key=03c7be34ae4a13f6d8a98a10893e2100'
    axios.get(url1).then(data => {
        for (var i = 0; i < Math.min(data.data.results.length, 10); i++) {
            carousel.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": data.data.results[i]["backdrop_path"] })
        }
        //console.log(carousel);
        res.json(carousel)
    }).catch(err => {
        res.send(err)
    });
});


// router.get('/:id', function(req, res){
//     let id = req.params.id;
//     let url = "https://jsonplaceholder.typicode.com/posts/" + id;
//     axios.get(url).then(posts => {
//         //console.log(posts);
//         res.json(posts.data);
//     }).catch(err =>{
//         res.send(err);
//     })
// });

// router.get('/trending', function(req, res, next) {
//     let carousel = []
//     const url1 = 'https://api.themoviedb.org/3/movie/now_playing?api_key=0ba6a440f1ad1b9a193be201a90612d3&language=en-US&page=1'
//     axios.get(url1).then(data => {
//         for (var i = 0; i < Math.min(data.data.results.length, 5); i++) {
//             carousel.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": data.data.results[i]["backdrop_path"] })
//         }
//         console.log(carousel);
//         res.json(carousel)
//     }).catch(err => {
//         res.send(err)
//     });
// });

router.get('/popularmovies', function(req, res) {
    let popular_movies = []
    const url2 = 'https://api.themoviedb.org/3/movie/popular?api_key='+api_key+"&language=en-US&page=1"
    axios.get(url2).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            popular_movies.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        res.send(popular_movies)
    }).catch(err => {
        res.send(err)
    });
})

router.get('/topRatedMovies', function(req, res) {
    let top_rated_movies = []
    const url3 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1'
    axios.get(url3).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            top_rated_movies.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        //console.log(top_rated_movies)
        res.send(top_rated_movies)
    }).catch(err => {
        res.send(err)
    });
})

router.get('/trending_movies', function(req, res) {
    let trending_movies = []
    const url4 = 'https://api.themoviedb.org/3/trending/movie/day?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1'
    axios.get(url4).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            trending_movies.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        console.log("trending_movies");
        console.log(trending_movies)
        res.send(trending_movies)
    }).catch(err => {
        res.send(err)
    });
})

// Popular tv
router.get('/popular_tv', function(req, res) {
    let popular_tv = []
    const url5 = 'https://api.themoviedb.org/3/tv/popular?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1'
    axios.get(url5).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            popular_tv.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["name"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        console.log(popular_tv)
        res.send(popular_tv)
    }).catch(err => {
        res.send(err)
    });
})

// top rated tv shows
router.get('/top_rated_tv', function(req, res) {
    let top_rated_tv = []
    const url6 = 'https://api.themoviedb.org/3/tv/top_rated?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1'
    axios.get(url6).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            top_rated_tv.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["name"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        //console.log(top_rated_tv)
        res.send(top_rated_tv)
    }).catch(err => {
        res.send(err)
    });
})

// trending tv shows

router.get('/trending_tv_shows', function(req, res) {
    let trending_tv = []
    const url7 = 'https://api.themoviedb.org/3/trending/tv/day?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1'
    axios.get(url7).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            trending_tv.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["name"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        //console.log(trending_tv)
        res.send(trending_tv)
    }).catch(err => {
        res.send(err)
    });
})

router.get('/search_multi/:val', function(req, res) {
    let query = req.params.val;
    let searchData = []
    const url8 = 'https://api.themoviedb.org/3/search/multi?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&query=' + query
    axios.get(url8).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            if (searchData.length <= 7) {
                if (data.data.results[i]["backdrop_path"]) {
                    if (data.data.results[i]["media_type"] == "tv") {
                        searchData.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["name"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["backdrop_path"], "media_type": data.data.results[i]["media_type"] })
                    } else {
                        searchData.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["backdrop_path"], "media_type": data.data.results[i]["media_type"] })
                    }
                }
            }
        }
        res.send(searchData)
    }).catch(err => {
        res.send(err)
    });
})

router.get('/watch/:category/:movieid', function(req, res, next) {
    let movieid = req.params.movieid;
    let cat = req.params.category;
    let searchData = []
    let num = 1;
    let flag = true;
    const url3 = "https://api.themoviedb.org/3/" + cat + "/" + movieid + "?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1"
    const yt = "https://api.themoviedb.org/3/" + cat + "/" + movieid + "/videos?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1"
    axios.get(url3).then(data => {
        axios.get(yt).then(result => {
            for (var i = 0; i < result.data['results'].length; i++) {
                //console.log(result.data['results'][i]['type']);
                if (result.data['results'][i]['type'] == 'Trailer') {
                    result.data['results'][i]['key']
                    flag = false;
                    num = 0;
                    if(cat == "movie") {
                        searchData.push({ 'title': data.data["title"], 'genres': data.data["genres"], 'spoken_languages': data.data['spoken_languages'], 'release_date': data.data['release_date'], 'runtime': data.data['runtime'], 'overview': data.data['overview'], 'vote_average': data.data['vote_average'], 'tagline': data.data['tagline'], 'key': result.data['results'][i]['key'] })
                    } else {
                        searchData.push({'title': data.data["name"], 'genres': data.data["genres"], 'spoken_languages': data.data['spoken_languages'], 'release_date': data.data['first_air_date'], 'runtime': data.data['episode_run_time'], 'overview': data.data['overview'], 'vote_average': data.data['vote_average'], 'tagline': data.data['tagline'], 'key': result.data['results'][i]['key']})
                    }
                    //searchData.push({ 'title': data.data["title"], 'genres': data.data["genres"], 'spoken_languages': data.data['spoken_languages'], 'release_date': data.data['release_date'], 'runtime': data.data['runtime'], 'overview': data.data['overview'], 'vote_average': data.data['vote_average'], 'tagline': data.data['tagline'], 'key': result.data['results'][i]['key'] })
                    break;
                }
            }
            if (flag) {
                for (var i = 0; i < result.data['results'].length; i++) {
                    if (result.data['results'][i]['type'] == 'Teaser') {
                        flag = false;
                        searchData.push({ 'title': data.data["title"], 'genres': data.data["genres"], 'spoken_languages': data.data['spoken_languages'], 'release_date': data.data['release_date'], 'runtime': data.data['runtime'], 'overview': data.data['overview'], 'vote_average': data.data['vote_average'], 'tagline': data.data['tagline'], 'key': result.data['results'][i]['key'] })
                        break;
                    }
                }
            }
            if (flag) {
                searchData.push({ 'title': data.data["title"], 'genres': data.data["genres"], 'spoken_languages': data.data['spoken_languages'], 'release_date': data.data['release_date'], 'runtime': data.data['runtime'], 'overview': data.data['overview'], 'vote_average': data.data['vote_average'], 'tagline': data.data['tagline'], 'key': 'tzkWB85ULJY' })
            }
            res.send(searchData)
        })
    }).catch(err => {
        res.send(err)
    });
});

router.get('/similar/:category/:id', function(req, res, next) {
    let id = req.params.id;
    let cat = req.params.category;
    let similar_content = []
    const url2 = "https://api.themoviedb.org/3/" + cat + "/" + id + "/similar?api_key="+api_key+"&language=en-US&page=1"
    axios.get(url2).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            similar_content.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        res.send(similar_content)
    }).catch(err => {
        res.send(err)
    });
});


router.get('/review/:category/:id', function(req, res, next) {
    let id = req.params.id;
    let cat = req.params.category;
    let reviews = []
    const url2 = "https://api.themoviedb.org/3/" + cat + "/" + id + "/reviews?api_key=03c7be34ae4a13f6d8a98a10893e2100&language=en-US&page=1"
    axios.get(url2).then(data => {
        for (var i = 0; i < Math.min(data.data.results.length, 10); i++) {
            reviews.push({ "author": data.data.results[i]["author"], "content": data.data.results[i]["content"], "created_at": data.data.results[i]["created_at"], "url": data.data.results[i]["url"], "rating": data.data.results[i]['author_details']["rating"], "avatar_path": "https://image.tmdb.org/t/p/original" + data.data.results[i]['author_details']["avatar_path"] })
        }
        //console.log(reviews);
        res.send(reviews)
    }).catch(err => {
        res.send(err)
    });
});


router.get('/recommend/:category/:id', function(req, res, next) {
    let id = req.params.id;
    let cat = req.params.category;
    let recommended_content = []
    const url2 = "https://api.themoviedb.org/3/" + cat + "/" + id + "/recommendations?api_key="+api_key+"&language=en-US&page=1"
    axios.get(url2).then(data => {
        for (var i = 0; i < data.data.results.length; i++) {
            //popular_movies.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
            recommended_content.push({ "id": data.data.results[i]["id"], "title": data.data.results[i]["title"], "poster_path": "https://image.tmdb.org/t/p/w500" + data.data.results[i]["poster_path"] })
        }
        res.send(recommended_content)
    }).catch(err => {
        res.send(err)
    });
});


router.get('/cast/:category/:id', function(req, res, next) {
    let id = req.params.id;
    let cat = req.params.category;
    let cast = []
    const url5 = "https://api.themoviedb.org/3/" + cat + "/" + id + "/credits?api_key="+api_key+"&language=en-US&page=1"
    axios.get(url5).then(data => {
        for (var i = 0; i < data.data['cast'].length; i++) {
            cast.push({
                "id": data.data['cast'][i]["id"],
                "name": data.data['cast'][i]["name"],
                "character": data.data['cast'][i]["character"],
                "poster_path": "https://image.tmdb.org/t/p/w500" + data.data['cast'][i]["profile_path"]
            })
        }
        res.send(cast)
    }).catch(err => {
        res.send(err)
    });
});

router.get('/castDetails/:id', function(req, res, next) {
    let id = req.params.id;
    let cast_det = []
    var insta = "";
    var fb = "";
    var knownas = "";
    var imdb = "";
    var twitter = "";
    var gender = "";
    const url5 = "https://api.themoviedb.org/3/person/" + id + "?api_key="+api_key+"&language=en-US&page=1"
    const url6 = "https://api.themoviedb.org/3/person/" + id + "/external_ids?api_key="+api_key+"&language=en-US&page=1"

    axios.get(url5).then(data => {
        axios.get(url6).then(data2 => {
            if (data2.data["gender"] == 1)
                gender = "Female";
            else if (data2.data["gender"] == 2)
                gender = "Male";

            for (let i = 0; i < data.data["also_known_as"].length; i++) {
                if (i == data.data["also_known_as"].length - 1)
                    knownas += data.data["also_known_as"][i];
                else
                    knownas += data.data["also_known_as"][i] + ", ";
            }
            //console.log(data2.data);
            if (data2.data["instagram_id"])
                insta = "https://www.instagram.com/" + data2.data["instagram_id"];

            if (data2.data["facebook_id"])
                fb = "https://www.facebook.com/" + data2.data["facebook_id"];

            if (data2.data["twitter_id"])
                twitter = "https://twitter.com/" + data2.data["twitter_id"];

            if (data2.data["imdb_id"])
                imdb = "https://www.imdb.com/name/" + data2.data["imdb_id"];

            cast_det.push({
                "name": data.data['name'],
                "profile_path": "https://image.tmdb.org/t/p/w500" + data.data['profile_path'],
                "dob": data.data['birthday'],
                "pob": data.data['place_of_birth'],
                "gender": gender,
                "known_for": data.data['known_for_department'],
                "other_names": knownas,
                "external_ids": { "insta": insta, "fb": fb, "twitter": twitter, "imdb": imdb },
                "biography": data.data['also_known_as']
            })
            res.send(cast_det)
        });
    }).catch(err => {
        res.send(err)
    });
});


router.get('/tvshowVideo/:tvshow_id', function(req, res, next) {
	let tvshow_id=req.params.tvshow_id;
    let url_1 = "https://api.themoviedb.org/3/tv/"+tvshow_id+"/videos?api_key="+api_key+"&language=en-US&page=1"
	axios.get(url_1).then(response => {
		let data = response.data.results;
		let finalData=[]
		for(let k in data){
			var dict={};
			dict["site"]=data[k]["site"];
			dict["type"]=data[k]["type"];
			dict["name"]=data[k]["name"];
			dict["key"]=data[k]["key"];
			finalData.push(dict);
		}
		//console.log(finalData);
		res.send(finalData);
	}).catch(error => {
        res.send(error)
    });
});

//Movie Video
router.get('/movieVideo/:movie_id', (req, res, next) => {
	let movie_id=req.params.movie_id;
	axios.get("https://api.themoviedb.org/3/"+"movie/"+movie_id+"/videos?api_key="+api_key+"&language=en-US&page=1")
	.then(response => {
		let data=response.data.results;
		let finalData=[]
		for(let k in data){
			var dict={};
			dict["site"]=data[k]["site"];
			dict["type"]=data[k]["type"];
			dict["name"]=data[k]["name"];
			dict["key"]=data[k]["key"];
			finalData.push(dict);
		}
		res.json(finalData);
	}).catch(error => {res.send(error);})
});


//Movie Details
router.get('/movieDetails/:movie_id', (req, res) => {
	let movie_id=req.params.movie_id;
	console.log(movie_id);
	let url="https://api.themoviedb.org/3/"+"movie/"+movie_id+"?api_key="+api_key+"&language=en-US&page=1";
	console.log(url);
	axios.get(url)
	.then(response => {
		let data=response.data;
		let finalData=[];
		var dict={};
		let genres=[];
		let spoken_languages=[];
		dict["id"]=data["id"];
		dict["title"]=data["title"];
		dict["release_date"]=data["release_date"].slice(0,4);
		dict["poster_path"]="https://image.tmdb.org/t/p/w154"+data["poster_path"];
		dict["media"]="movie";

		for(let g in data["genres"]){
			genres.push(data["genres"][g]["name"]);
		}
		dict["genres"]=genres.join(",");

		for(let l in data["spoken_languages"]){
			spoken_languages.push(data["spoken_languages"][l]["english_name"])
		}
		dict["spoken_languages"]=spoken_languages.join(",");

		var hours = Math.floor(data["runtime"] / 60);  
  		var minutes = data["runtime"] % 60;   
		dict["runtime"]=hours+"hrs "+minutes+"mins";;

		dict["overview"]=data["overview"];
		dict["vote_average"]=data["vote_average"];
		dict["tagline"]=data["tagline"];
		finalData.push(dict);
		console.log(finalData);
		res.json(finalData);
	}).catch(error => {res.send(error);})
});

//Tvshow Details
router.get('/tvshowDetails/:tvshow_id', (req, res, next) => {
	let tvshow_id=req.params.tvshow_id;
	axios.get("https://api.themoviedb.org/3/"+"tv/"+tvshow_id+"?api_key="+api_key+"&language=en-US&page=1")
	.then(response => {
		let data=response.data;
		let finalData=[];
		var dict={};
		let genres=[];
		let spoken_languages=[];
		dict["id"]=data["id"];
		dict["name"]=data["name"];
		dict["first_air_date"]=data["first_air_date"].slice(0,4);
		dict["poster_path"]="https://image.tmdb.org/t/p/w154"+data["poster_path"];
		dict["media"]="tv";

		for(let g in data["genres"]){
			genres.push(data["genres"][g]["name"]);
		}
		dict["genres"]=genres.join(",");

		for(let l in data["spoken_languages"]){
			spoken_languages.push(data["spoken_languages"][l]["english_name"])
		}	
		
		dict["spoken_languages"]=spoken_languages.join(",");
		for(let r in data["episode_run_time"]){
			var hours = Math.floor(data["episode_run_time"][r] / 60);  
			console.log('HOURS:',hours);
  			var minutes = data["episode_run_time"][r] % 60;   
			dict["episode_runtime"]=hours+"hrs "+minutes+"mins";
		}
		
		dict["overview"]=data["overview"];
		dict["vote_average"]=data["vote_average"];
		dict["tagline"]=data["tagline"];
		finalData.push(dict);
		console.log(finalData);
		res.json(finalData);
	}).catch(error => {res.send(error);})
});


//Recommended Movies
router.get('/recommendedMovies/:movie_id', (req, res) => {
	let movie_id=req.params.movie_id;
	axios.get(BASE_URL+"movie/"+movie_id+"/recommendations?api_key="+api_key+"&language=en-US&page=1")
	.then(response => {
		let data=response.data.results;
		let finalData=[]
		for(let k in data){
			var dict={};
			dict["media"]="movie";
			dict["id"]=data[k]["id"];
			dict["title"]=data[k]["title"];
			dict["poster_path"]="https://image.tmdb.org/t/p/w154"+data[k]["poster_path"];
			if(data["poster_path"] != null || data["poster_path"] != ""){
				finalData.push(dict);
			}
		}
		console.log(finalData);
		res.json(finalData);
	}).catch(error => {res.send(error);})
});

//Recommended TV Shows
router.get('/recommendedTvshows/:tvshow_id', (req, res) => {
	let tvshow_id=req.params.tvshow_id;
	axios.get(BASE_URL+"tv/"+tvshow_id+"/recommendations?api_key="+api_key+"&language=en-US&page=1")
	.then(response => {
		let data=response.data.results;
		let finalData=[]
		for(let k in data){
			var dict={};
			dict["media"]="tv";
			dict["id"]=data[k]["id"];
			dict["title"]=data[k]["name"];
			dict["poster_path"]="https://image.tmdb.org/t/p/w154"+data[k]["poster_path"];
			if(data["poster_path"] != null || data["poster_path"] != ""){
				finalData.push(dict);
			}
		}
		console.log(finalData);
		res.json(finalData);
	}).catch(error => {res.send(error);})
});


//Movie Reviews
router.get('/movieReviews/:movie_id', (req, res) => {
	let movie_id=req.params.movie_id;
	axios.get(BASE_URL+"movie/"+movie_id+"/reviews?api_key="+api_key+"&language=en-US&page=1")
	.then(response => {
		let data=response.data.results;
		let finalData=[];
		let count=0;
		let ad;
		for(let k in data){
			if(count<10){
				var dict={};
				dict["author"]=data[k]["author"];
				dict["content"]=data[k]["content"];
				dict["created_at"]=new Date(data[k]["created_at"]);
				dict["url"]=data[k]["url"];
				ad=data[k]["author_details"];
				dict["username"]=ad["username"];
				dict["rating"]=ad["rating"];
				if(ad["rating"] == null){
					dict["rating"]=0;
				}
				if(ad["avatar_path"] !=null)
					dict["avatar_path"]="https://image.tmdb.org/t/p/w92"+ad["avatar_path"];
				else
					dict["avatar_path"]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
				
				finalData.push(dict);
				count=count+1;
			}
		}
		console.log(finalData);
		res.json(finalData);
	}).catch(error => {res.send(error);})
});


//Tvshow Reviews
router.get('/tvshowReviews/:tvshow_id', (req, res) => {
	let tvshow_id=req.params.tvshow_id;
	axios.get(BASE_URL+"tv/"+tvshow_id+"/reviews?api_key="+api_key+"&language=en-US&page=1")
	.then(response => {
		let data=response.data.results;
		console.log(data);
		let finalData=[];
		let count=0;
		let ad;
		for(let k in data){
			if(count<10){
				var dict={};
				dict["author"]=data[k]["author"];
				dict["content"]=data[k]["content"];
				dict["created_at"]=new Date(data[k]["created_at"]);
				dict["url"]=data[k]["url"];
				ad=data[k]["author_details"];
				dict["username"]=ad["username"];
				dict["rating"]=ad["rating"];
				if(ad["rating"] == null){
					dict["rating"]=0;
				}
				if(ad["avatar_path"] !="")
					dict["avatar_path"]="https://image.tmdb.org/t/p/w92"+ad["avatar_path"];
				else
					dict["avatar_path"]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
				
				finalData.push(dict);
				count=count+1
			}
		}
		console.log(finalData);
		res.json(finalData);
	}).catch(error => {res.send(error);})
});

module.exports = router;