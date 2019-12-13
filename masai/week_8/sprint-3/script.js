$(document).ready(function () {
    $('#btnSearch').click(function () {
        var search = $('#search').val();
        event.preventDefault()
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + search + "",
        })
            .done(function (data) {
                newData = data
                // console.log(data)
                displayData(data)
            })
    });

    function displayData(newData) {
        var card = ""
        $('#dataShow').html('');
        newData.drinks.forEach(function (val) {
            console.log(val)
            card = `<div class = "col my-2">
                <div class = "card" style = "width: 250px; height:400px;">
                    <img src = "`+ val.strDrinkThumb + `" class="card-img-top" alt="...">
                    <div class = "card-body overflow-auto">
                    <h4 class="font-weight-bold">`+ val.strDrink + `</h4>
                    <h5>`+ val.strCategory + `</h5>
                    <p class = "card-text">`+ val.strInstructions + `</p>
                        </div>
                    </div>
                </div> `
            $('#dataShow').append(card)

        })


    }

    $('#btnSearchByName').click(function (event) {
        event.preventDefault();
        var searchByName = $('#searchByName').val();
        alert(searchByName)  
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchByName+"",
        })
        .done(function (data) {
            console.log(data)
            displayDataByName(data)
        });
    });

    function displayDataByName(data){
        var cardForName=""
        $('#dataShow').html('');
        data.drinks.forEach(function (val) {
            console.log(val)
            card = `<div class = "col my-2">
                <div class = "card" style = "width: 250px; height:400px;">
                    <img src = "`+ val.strDrinkThumb + `" class="card-img-top" alt="...">
                    <div class = "card-body overflow-auto">
                    <h5>`+ val.strDrink + `</h5>
                    <p class = "card-text">`+ val.strInstructions + `</p>
                        </div>
                    </div>
                </div> `
            $('#dataShow').append(card)

        })

    }

});