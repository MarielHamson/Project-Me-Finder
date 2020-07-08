import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { MovieFinderService } from './movieFinderService';


function displayMovieResults(response) {
  if(response.results.length > 5) {
    for (let i = 0; i < 5; i++) {
      $("#title"+i).text(response.results[i].title);
      if (response.results[i].poster_path){
        $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`)
      } 
      $(".result"+i+"-summary").html(`Release date: ${response.results[i].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[i].overview);
      $("#result"+i).show();

    }
  } else {
    for (let i = 0; i < response.results.length; i++){
      $("#title"+i).text(response.results[i].title);
      if (response.results[i].poster_path){
        $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[i].poster_path} >`)
      } 
      $(".result"+i+"-summary").html(`Release date: ${response.results[i].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[i].overview);
      $("#result"+i).show();
    }
  }
}

function displayPeopleResults(response) {
  if(response.results[0].known_for.length > 5) {
    for (let i = 0; i < 5; i++) {
      $("#title"+i).text(response.results[0].known_for[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].known_for[i].poster_path} >`);
      $(".result"+i+"-summary").html(`Release date: ${response.results[0].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[0].overview);
      $("#result"+i).show();
    }
  } else {
    for (let i = 0; i < response.results[0].known_for.length; i++){
      $("#title"+i).text(response.results[0].known_for[i].title);
      $("#result"+i+" .image").html(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].known_for[i].poster_path} >`);
      $(".result"+i+"-summary").html(`Release date: ${response.results[0].known_for[i].release_date}<br>`);
      $(".result"+i+"-summary").html(response.results[0].known_for[i].overview);
      $("#result"+i).show();
    }
  }
}

$(document).ready(function(){
  let srch = new MovieFinderService();
  $("#movie-search-form").submit(function (event) {
    event.preventDefault();
    let title = $("#movie-search").val();
    $("#movie-search").val("");

    (async() => {
      const response = await srch.searchMovie(title);
      displayMovieResults(response);
    })();
  });

  $("#people-search-form").submit(function (event) {
    event.preventDefault();
    let person = $("#people-search").val();
    $("#people-search").val("");

    (async() => {
      const response = await srch.searchPerson(person);
      displayPeopleResults(response);
    })();
  });
});

  (async() => {
    const response = await srch.searchMovie("Avengers");
    displayResults(response);

  })();


  $("#add-to-list0").click(function(event) {
    event.preventDefault();
    console.log();

  });
  $("#add-to-list1").click(function() {
    
  });
  $("#add-to-list2").click(function() {
    
  });
  $("#add-to-list3").click(function() {
    
  });
  $("#add-to-list4").click(function() {
    
  });




  $("#button0").click(function() {
    $("input:checkbox[name=id-tags0]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });
    
  $("#button1").click(function() {
    $("input:checkbox[name=id-tags1]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
      
    });
  });

  $("#button2").click(function() {
    $("input:checkbox[name=id-tags2]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });

  $("#button3").click(function() {
    $("input:checkbox[name=id-tags3]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });

  $("#button4").click(function() {
    $("input:checkbox[name=id-tags4]:checked").each(function() {
      const checkedtags = $(this).val();
      $("#result0-summary").append(checkedtags);
    });
  });


