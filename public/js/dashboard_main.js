feather.replace();

$("#state").on('change', function (event) {
    let state = event.target.value;
    let cities;

    $.ajax({
        type: "POST",
        data: {state: state},
        url: "/getcity",
        success: function (data) {
            $("#cities").empty();
            $("#cities").append(`
                <option onclick="return false">Select City</option>
                `);
                for (let k in data) {
                    $("#cities").append(`
                        <option value="` + data[k] + `">` + data[k] + `</option>
                        `);
                    }

                }
            });

        });

        $("#cities").on('change', function (event) {
            let city = event.target.value;

            if(city != undefined) {
                let getFormattedData = function (data) {
                    let result = {
                        children: []
                    }

                    let valid_categories = ["American (New)", "American (Traditional)", "Asian Fusion", "Barbeque", "Bars", "Breakfast & Brunch", "Burgers", "Cafes", "Chicken Wings", "Chinese", "Fast Food", "Indian", "Italian", "Japanese", "Korean", "Mexican", "Pizza", "Sandwiches", "Thai"];

                    for (let category in data) {

                        let temp = {"Name": category, "Count": data[category]};
                        result.children.push(temp);
                    }

                    result.children = result.children.filter(function (e) {
                        return valid_categories.indexOf(e.Name) > -1;
                    });

                    return result;
                }

                $.ajax({
                    type: "POST",
                    data: {city: city},
                    url: "/get_bubble_data",
                    success: function (data) {
                        let categoryMap = {};
                        for (let i = 0; i < data.length; i++) {
                            let restCategoryList = data[i].categories.split(",");
                            for (let j = 0; j < restCategoryList.length; j++) {
                                let categoryName = restCategoryList[j].trim().replace("\"", '');
                                categoryMap[categoryName] = (categoryMap[categoryName] == undefined ? 1 : categoryMap[categoryName] + 1);
                            }
                        }

                        window.drawBubble(getFormattedData(categoryMap));
                    }
                });

                $.ajax({
                    type: "POST",
                    data: {city: city},
                    url: "/get_price_data",
                    success: function (data) {
                        var result = [{group: "PriceRange", one : 0, two: 0, three:0, four: 0}];

                        for (let i = 0; i < data.length; i++) {
                            if (data[i].attributes && "RestaurantsPriceRange2" in data[i].attributes && data[i].attributes.RestaurantsPriceRange2 != null) {
                                switch(data[i].attributes.RestaurantsPriceRange2) {
                                    case '1':
                                    result[0].one = (result[0].one + 1) || 0;
                                    break;
                                    case '2':
                                    result[0].two = (result[0].two + 1) || 0;
                                    break;
                                    case '3':
                                    result[0].three = (result[0].three  + 1) || 0;
                                    break;
                                    case '4':
                                    result[0].four = (result[0].four  + 1) || 0;
                                    break;
                                }
                            }
                }
                drawWifi(result);
            }
        });


        $.ajax({
            type: "POST",
            data: {city: city},
            url: "/get_wifi_data",
            success: function (data) {
                var result = {city: city, free : 0, no: 0, yes:0, noInfo: 0};

                for (let i = 0; i < data.length; i++) {
                    if (data[i].attributes && "WiFi" in data[i].attributes) {
                        if(data[i].attributes.WiFi.includes("free"))
                            result.free = (result.free + 1) || 0;
                        else if(data[i].attributes.WiFi.includes("no"))
                            result.no = (result.no + 1) || 0;
                        else if(data[i].attributes.WiFi.includes("yes"))
                            result.yes = (result.yes + 1) || 0;
                        else
                            result.noInfo = (result.noInfo + 1) || 0;
                    }
                }
                drawWifiChart(result);
            }
        });

        $.ajax({
            type: "POST",
            data: {city: city},
            url: "/get_cuisine_data",
            success: function (data) {
                debugger

                var myMap = new Map();
                // setting the values

                var result = [];
                for (let i = 0; i < data.length; i++) {
                    var restaurantDetails = {name: name, rating : 0, totalReviews: 0, categories: "", lat: Number, long: Number };
                    restaurantDetails.name = data[i].name;
                    restaurantDetails.rating = data[i].stars;
                    restaurantDetails.totalReviews = data[i].review_count;
                    restaurantDetails.categories = data[i].categories;
                    restaurantDetails.lat = data[i].latitude;
                    restaurantDetails.long = data[i].longitude;
                    result.push(restaurantDetails);
                }
                var response = {city: city, result : result};
                drawMap(response);
            }
        });


    }

        });
