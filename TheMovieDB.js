(function () {

    $(init);

    function init()
    {
        $("#searchMovie").click(searchMovie);
        var movieTitle = $("#movieTitle");
        var table = $("#results");
        var tbody = $("#results tbody");

        function searchMovie()
        {
            var title = movieTitle.val();

            $.ajax({
                url: "https://api.themoviedb.org/3/search/movie?api_key=a09fd1d63dbc80b5d6ce75f4ffc6d148&language=en-US&query="+title+"&page=1&include_adult=yes",

                success: movieRendering
            });
        }
                function movieRendering(movies)
                {
                    console.log(movies);

                    tbody.empty();

                    for(var m in movies)
                    {
                        var movie = movies[m];
                        var title = movie.title;
                        var pilot = movie.overview;
                        var poster = movie.poster_path;

                        var tr = $("<tr>");
                        var titleTd = $("<td>").append(title);

                        tr.append(titleTd);

                        tbody.append(tr);

                    }
                }
    }
    })();